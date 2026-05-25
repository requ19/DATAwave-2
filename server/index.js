// index.js — PayHub backend server

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const payhubRoutes = require('./routes/payhub');
const { setPayhubPublicKey } = require('./utils/signature');
const { fetchPayhubPublicKey } = require('./services/payhub');

const app = express();
const PORT = process.env.PORT || 4000;

// ─── Middleware ───────────────────────────────────────────────────────────────

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}));

// Parse JSON for all routes EXCEPT /callback (needs raw body for signature)
app.use((req, res, next) => {
  if (req.path === '/api/payhub/callback') {
    next(); // raw body handled in route
  } else {
    express.json()(req, res, next);
  }
});

// ─── Routes ───────────────────────────────────────────────────────────────────

app.use('/api/payhub', payhubRoutes);

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

// ─── Startup ──────────────────────────────────────────────────────────────────

async function start() {
  // Fetch PayHub public key on startup (used to verify callbacks and responses)
  try {
    const publicKey = await fetchPayhubPublicKey();
    setPayhubPublicKey(publicKey);
    console.log('[startup] PayHub public key loaded ✓');
  } catch (err) {
    console.warn('[startup] Could not fetch PayHub public key:', err.message);
    console.warn('[startup] Callback signature verification will be skipped');
  }

  app.listen(PORT, () => {
    console.log(`\n🚀 PayHub backend running on http://localhost:${PORT}`);
    console.log(`   Merchant ID : ${process.env.MERCHANT_ID || '(not set)'}`);
    console.log(`   PayHub URL  : ${process.env.PAYHUB_BASE_URL}`);
    console.log(`   Callback URL: ${process.env.CALLBACK_URL || '(not set)'}\n`);
  });
}

start();
