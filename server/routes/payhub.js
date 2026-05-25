// routes/payhub.js
// REST endpoints exposed to the React frontend

const express = require('express');
const router = express.Router();
const payhub = require('../services/payhub');
const { verifyPayhubSignature } = require('../utils/signature');

// ─── Initiate Payment ─────────────────────────────────────────────────────────

/**
 * POST /api/payhub/initiate
 * Body: { amount, currency, customerId, customerEmail, description,
 *         successUrl, failUrl, merchantTransactionId?, storeCard?, language? }
 * Returns: { sessionId, hppUrl, status, ... }
 */
router.post('/initiate', async (req, res) => {
  try {
    const {
      amount,
      currency,
      customerId,
      customerEmail,
      description,
      successUrl,
      failUrl,
      merchantTransactionId,
      storeCard,
      language,
      merchantData,
    } = req.body;

    // Basic validation
    if (!amount || !currency || !successUrl) {
      return res.status(400).json({
        error: 'amount, currency, successUrl are required',
      });
    }
    if (amount <= 0) {
      return res.status(400).json({ error: 'amount must be greater than 0' });
    }

    const { data } = await payhub.initiatePayment({
      merchantTransactionId,
      amount,
      currency,
      customerId,
      customerEmail,
      description,
      successUrl,
      failUrl,
      storeCard,
      language,
      merchantData,
    });

    res.json({
      sessionId: data.sessionId,
      merchantTransactionId: data.merchantTransactionId,
      hppUrl: data.hppUrl,
      status: data.status,
      expiresAt: data.expiresAt,
      amount: data.amount,
      currency: data.currency,
    });
  } catch (err) {
    console.error('[/initiate]', err.message, err.payhubError);
    res.status(err.status || 500).json({
      error: err.message,
      details: err.payhubError || null,
    });
  }
});

// ─── Get Transaction Status ───────────────────────────────────────────────────

/**
 * GET /api/payhub/transaction/:merchantTransactionId
 * Returns payment status, amount, paymentMethod, card info, etc.
 */
router.get('/transaction/:merchantTransactionId', async (req, res) => {
  try {
    const { merchantTransactionId } = req.params;
    const { data } = await payhub.getTransaction(merchantTransactionId);
    res.json(data);
  } catch (err) {
    console.error('[/transaction]', err.message);
    res.status(err.status || 500).json({ error: err.message, details: err.payhubError });
  }
});

/**
 * GET /api/payhub/session/:sessionId
 * Returns session details by PayHub session ID
 */
router.get('/session/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { data } = await payhub.getSession(sessionId);
    res.json(data);
  } catch (err) {
    console.error('[/session]', err.message);
    res.status(err.status || 500).json({ error: err.message, details: err.payhubError });
  }
});

// ─── Refund ───────────────────────────────────────────────────────────────────

/**
 * POST /api/payhub/refund/:sessionId
 * Body: { amountCents, currency?, reason? }
 *
 * IMPORTANT: amountCents is in MINOR UNITS (cents)
 * Example: 5000 = 50.00 KGS
 */
router.post('/refund/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { amountCents, currency, reason } = req.body;

    if (!amountCents || amountCents <= 0) {
      return res.status(400).json({ error: 'amountCents must be greater than 0' });
    }

    const { data } = await payhub.refundPayment(sessionId, amountCents, currency, reason);
    res.json(data);
  } catch (err) {
    console.error('[/refund]', err.message);
    res.status(err.status || 500).json({ error: err.message, details: err.payhubError });
  }
});

/**
 * GET /api/payhub/refunds/:sessionId
 * Returns list of refunds for a session
 */
router.get('/refunds/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { data } = await payhub.listRefunds(sessionId);
    res.json(data);
  } catch (err) {
    console.error('[/refunds]', err.message);
    res.status(err.status || 500).json({ error: err.message, details: err.payhubError });
  }
});

// ─── Void ─────────────────────────────────────────────────────────────────────

/**
 * POST /api/payhub/void/:sessionId
 * Body: { reason? }
 */
router.post('/void/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const { reason } = req.body;
    const { data } = await payhub.voidPayment(sessionId, reason);
    res.json(data);
  } catch (err) {
    console.error('[/void]', err.message);
    res.status(err.status || 500).json({ error: err.message, details: err.payhubError });
  }
});

// ─── Callback (Webhook from PayHub) ──────────────────────────────────────────

/**
 * POST /api/payhub/callback
 * PayHub calls this URL when payment status changes.
 * Must be publicly accessible (set CALLBACK_URL in .env).
 *
 * PayHub sends:
 *   Headers: X-PayHub-Signature, X-PayHub-Timestamp, X-PayHub-Nonce
 *   Body: { merchantTransactionId, status, amount, providerTransactionId, ... }
 */
router.post('/callback', express.raw({ type: 'application/json' }), (req, res) => {
  try {
    const rawBody = req.body.toString('utf8');
    const signature = req.headers['x-payhub-signature'];
    const timestamp = req.headers['x-payhub-timestamp'];
    const nonce = req.headers['x-payhub-nonce'];

    // 1. Verify PayHub's signature
    const isValid = verifyPayhubSignature(rawBody, signature, timestamp, nonce);
    if (!isValid) {
      console.error('[callback] Invalid PayHub signature — rejected');
      return res.status(401).json({ error: 'Invalid signature' });
    }

    const payload = JSON.parse(rawBody);
    console.log('[callback] Payment update:', {
      merchantTransactionId: payload.merchantTransactionId,
      status: payload.status,
      amount: payload.amount,
    });

    // 2. Handle payment status
    // TODO: Update your database here based on payload.status
    // Example:
    //   if (payload.status === 'SUCCESS') await db.orders.markPaid(payload.merchantTransactionId)
    //   if (payload.status === 'FAILED')  await db.orders.markFailed(payload.merchantTransactionId)
    //
    // Status values: SUCCESS, FAILED, DECLINED, CANCELLED, PARTIALLY_REFUNDED, REFUNDED

    switch (payload.status) {
      case 'SUCCESS':
        // TODO: fulfil the order
        console.log(`[callback] Payment SUCCESS for ${payload.merchantTransactionId}`);
        break;
      case 'FAILED':
      case 'DECLINED':
        console.log(`[callback] Payment ${payload.status} for ${payload.merchantTransactionId}`);
        break;
      case 'REFUNDED':
      case 'PARTIALLY_REFUNDED':
        console.log(`[callback] Refund ${payload.status} for ${payload.merchantTransactionId}`);
        break;
      default:
        console.log(`[callback] Status: ${payload.status}`);
    }

    // Must respond 200 OK — otherwise PayHub retries (up to 5 times)
    res.status(200).json({ received: true });
  } catch (err) {
    console.error('[callback] Error:', err.message);
    res.status(500).json({ error: 'Internal error' });
  }
});

module.exports = router;
