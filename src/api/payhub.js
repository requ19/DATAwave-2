// src/api/payhub.js
// Frontend API calls to our backend (NOT directly to PayHub)

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000';

async function handleResponse(res) {
  const data = await res.json();
  if (!res.ok) {
    const err = new Error(data.error || 'Request failed');
    err.details = data.details;
    err.status = res.status;
    throw err;
  }
  return data;
}

/**
 * Initiate a payment session
 * Returns { sessionId, hppUrl, merchantTransactionId, status, expiresAt }
 */
export async function initiatePayment(params) {
  const res = await fetch(`${BACKEND_URL}/api/payhub/initiate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  return handleResponse(res);
}

/**
 * Get transaction status by merchant transaction ID
 */
export async function getTransactionStatus(merchantTransactionId) {
  const res = await fetch(
    `${BACKEND_URL}/api/payhub/transaction/${encodeURIComponent(merchantTransactionId)}`
  );
  return handleResponse(res);
}

/**
 * Get session details by PayHub session ID
 */
export async function getSession(sessionId) {
  const res = await fetch(`${BACKEND_URL}/api/payhub/session/${sessionId}`);
  return handleResponse(res);
}

/**
 * Refund a payment
 * @param {string} sessionId
 * @param {number} amountCents - Amount in cents (e.g. 5000 = 50 KGS)
 * @param {string} reason
 */
export async function refundPayment(sessionId, amountCents, reason = '') {
  const res = await fetch(`${BACKEND_URL}/api/payhub/refund/${sessionId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amountCents, currency: 'KGS', reason }),
  });
  return handleResponse(res);
}

/**
 * List all refunds for a session
 */
export async function listRefunds(sessionId) {
  const res = await fetch(`${BACKEND_URL}/api/payhub/refunds/${sessionId}`);
  return handleResponse(res);
}
