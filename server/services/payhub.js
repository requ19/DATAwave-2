// services/payhub.js
// All PayHub API calls go through here

const fetch = require('node-fetch');
const { buildPostHeaders, buildGetHeaders, preparePayload } = require('../utils/signature');

const BASE_URL = process.env.PAYHUB_BASE_URL || 'https://idm.ctechnology.kg/payhub-api';

/**
 * Generic request helper — logs errors with full context
 */
async function request(method, path, body = null) {
  const url = `${BASE_URL}${path}`;
  let headers;

  if (method === 'GET') {
    headers = buildGetHeaders(url);
  } else {
    headers = buildPostHeaders(body);
  }

  const options = {
    method,
    headers,
  };

  if (body && method !== 'GET') {
    // Send sorted + null-excluded JSON (must match what was signed)
    const sorted = preparePayload(body);
    options.body = JSON.stringify(sorted);
  }

  console.log(`[PayHub] ${method} ${url}`);

  const res = await fetch(url, options);
  const text = await res.text();

  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }

  if (!res.ok) {
    const err = new Error(`PayHub ${res.status}: ${data.message || text}`);
    err.status = res.status;
    err.payhubError = data;
    throw err;
  }

  return {
    data,
    rawBody: text,
    headers: res.headers,
  };
}

// ─── Payment Initiation ──────────────────────────────────────────────────────

/**
 * Initiate a new payment session
 * Returns sessionId and hppUrl to redirect the customer
 */
async function initiatePayment({
  merchantTransactionId,
  amount,
  currency = 'KGS',
  customerId,
  customerEmail,
  description,
  successUrl,
  failUrl,
  storeCard = false,
  preAuth = false,
  recurring = false,
  cardToken = null,
  language = 'RU',
  terminalId,
  merchantData,
}) {
  const body = {
    merchantId: process.env.MERCHANT_ID,
    merchantTransactionId,
    amount,
    currency,
    customerId,
    customerEmail,
    description,
    successUrl,
    failUrl,
    storeCard,
    preAuth,
    recurring,
    cardToken,
    language,
    terminalId: terminalId || process.env.TERMINAL_ID,
    merchantData,
  };

  return request('POST', '/api/v1/payments/initiate', body);
}

// ─── Transaction Status ───────────────────────────────────────────────────────

/**
 * Get transaction status by merchant transaction ID
 */
async function getTransaction(merchantTransactionId) {
  const merchantId = process.env.MERCHANT_ID;
  return request(
    'GET',
    `/api/v1/merchants/${merchantId}/transactions/${merchantTransactionId}`
  );
}

/**
 * Get session details by PayHub session ID
 */
async function getSession(sessionId) {
  const merchantId = process.env.MERCHANT_ID;
  return request('GET', `/api/v1/merchants/${merchantId}/sessions/${sessionId}`);
}

// ─── Refund ───────────────────────────────────────────────────────────────────

/**
 * Refund a payment (full or partial)
 * @param {string} sessionId - PayHub session ID
 * @param {number} amountCents - Amount in CENTS (e.g. 5000 = 50 KGS)
 * @param {string} currency
 * @param {string} reason
 */
async function refundPayment(sessionId, amountCents, currency = 'KGS', reason = '') {
  const body = {
    merchantId: process.env.MERCHANT_ID,
    amount: amountCents,
    currency,
    reason,
  };

  return request('POST', `/api/v1/payments/${sessionId}/refund`, body);
}

/**
 * List all refunds for a session
 */
async function listRefunds(sessionId) {
  const merchantId = process.env.MERCHANT_ID;
  return request(
    'GET',
    `/api/v1/payments/${sessionId}/refunds?merchantId=${merchantId}`
  );
}

/**
 * Cancel a specific refund
 */
async function cancelRefund(sessionId, refundProviderTransactionId, reason = '') {
  const body = {
    merchantId: process.env.MERCHANT_ID,
    refundProviderTransactionId,
    reason,
  };

  return request('POST', `/api/v1/payments/${sessionId}/refund-cancel`, body);
}

// ─── Void ─────────────────────────────────────────────────────────────────────

/**
 * Void (reverse) a card payment
 */
async function voidPayment(sessionId, reason = '') {
  const body = {
    merchantId: process.env.MERCHANT_ID,
    reason,
  };

  return request('POST', `/api/v1/payments/${sessionId}/void`, body);
}

// ─── Public Key ───────────────────────────────────────────────────────────────

/**
 * Fetch PayHub's public key (used to verify callbacks/responses)
 */
async function fetchPayhubPublicKey() {
  const url = `${BASE_URL}/api/v1/merchants/payhub-public-key`;
  const res = await fetch(url);
  const text = await res.text();
  return text; // PEM string
}

module.exports = {
  initiatePayment,
  getTransaction,
  getSession,
  refundPayment,
  listRefunds,
  cancelRefund,
  voidPayment,
  fetchPayhubPublicKey,
};
