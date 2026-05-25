// utils/signature.js
// Handles RSA-SHA256 signing and verification for PayHub API

const crypto = require('crypto');
const fs = require('fs');

let _privateKey = null;
let _payhubPublicKey = null;

/**
 * Load merchant private key from file (cached after first load)
 */
function getPrivateKey() {
  if (_privateKey) return _privateKey;
  const keyPath = process.env.PRIVATE_KEY_PATH;
  if (!keyPath || !fs.existsSync(keyPath)) {
    throw new Error(`Private key not found at: ${keyPath}. Set PRIVATE_KEY_PATH in .env`);
  }
  _privateKey = fs.readFileSync(keyPath, 'utf8');
  return _privateKey;
}

/**
 * Set PayHub public key (fetched from API or stored locally)
 */
function setPayhubPublicKey(pem) {
  _payhubPublicKey = pem;
}

function getPayhubPublicKey() {
  return _payhubPublicKey;
}

/**
 * Sort object keys alphabetically and remove null/undefined values (required by PayHub)
 */
function preparePayload(obj) {
  const sorted = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      if (obj[key] !== null && obj[key] !== undefined) {
        sorted[key] = obj[key];
      }
    });
  return sorted;
}

/**
 * Sign a POST/PUT request body
 * Payload format: payload={jsonBody}&timestamp={ts}&nonce={nonce}
 */
function signBody(body, timestamp, nonce) {
  const sorted = preparePayload(body);
  const jsonStr = JSON.stringify(sorted);
  const payload = `payload=${jsonStr}&timestamp=${timestamp}&nonce=${nonce}`;

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(payload, 'utf8');
  sign.end();

  return sign.sign(getPrivateKey(), 'base64');
}

/**
 * Sign a GET request URL
 * Payload format: payload={fullUrl}&timestamp={ts}&nonce={nonce}
 */
function signUrl(fullUrl, timestamp, nonce) {
  const payload = `payload=${fullUrl}&timestamp=${timestamp}&nonce=${nonce}`;

  const sign = crypto.createSign('RSA-SHA256');
  sign.update(payload, 'utf8');
  sign.end();

  return sign.sign(getPrivateKey(), 'base64');
}

/**
 * Build auth headers for a POST/PUT request
 */
function buildPostHeaders(body) {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = crypto.randomBytes(16).toString('hex');
  const signature = signBody(body, timestamp, nonce);

  return {
    'Content-Type': 'application/json',
    'X-PayHub-Signature': signature,
    'X-PayHub-Timestamp': timestamp,
    'X-PayHub-Nonce': nonce,
  };
}

/**
 * Build auth headers for a GET request
 */
function buildGetHeaders(fullUrl) {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = crypto.randomBytes(16).toString('hex');
  const signature = signUrl(fullUrl, timestamp, nonce);

  return {
    'Content-Type': 'application/json',
    'Host': new URL(fullUrl).host,
    'X-PayHub-Signature': signature,
    'X-PayHub-Timestamp': timestamp,
    'X-PayHub-Nonce': nonce,
  };
}

/**
 * Verify PayHub's signature on responses and callbacks
 * Used to confirm the response/callback is genuinely from PayHub
 */
function verifyPayhubSignature(rawBody, signature, timestamp, nonce) {
  const publicKey = getPayhubPublicKey();
  if (!publicKey) {
    console.warn('PayHub public key not loaded — skipping verification');
    return true; // Allow but warn during development
  }

  try {
    const payload = `payload=${rawBody}&timestamp=${timestamp}&nonce=${nonce}`;
    const verify = crypto.createVerify('RSA-SHA256');
    verify.update(payload, 'utf8');
    const signatureBuffer = Buffer.from(signature, 'base64');
    return verify.verify(publicKey, signatureBuffer);
  } catch (err) {
    console.error('Signature verification error:', err.message);
    return false;
  }
}

module.exports = {
  preparePayload,
  signBody,
  signUrl,
  buildPostHeaders,
  buildGetHeaders,
  verifyPayhubSignature,
  setPayhubPublicKey,
  getPayhubPublicKey,
};
