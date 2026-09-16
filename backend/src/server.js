require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const contactRouter = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Trust proxy (required on Render)
app.set('trust proxy', 1);

// ── Security headers ──────────────────────────────────────────
app.use(helmet());

// ── CORS ──────────────────────────────────────────────────────
// FRONTEND_URL can be comma-separated for multiple origins.
// e.g. FRONTEND_URL=https://mukeshchoudhary.vercel.app,https://mukeshchoudhary.dev
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:4173',
  ...(process.env.FRONTEND_URL
    ? process.env.FRONTEND_URL.split(',').map((u) => u.trim())
    : []),
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); // Postman / curl / mobile
    if (allowedOrigins.includes(origin)) return callback(null, true);
    console.warn(`CORS blocked: ${origin}`);
    callback(new Error(`CORS policy: origin ${origin} not allowed.`));
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

// ── Body parsing ──────────────────────────────────────────────
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));

// ── Health check ──────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Portfolio backend is running.' });
});

// ── Routes ────────────────────────────────────────────────────
app.use('/api/contact', contactRouter);

// ── 404 ───────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found.' });
});

// ── Global error handler ──────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Server error:', err.message);
  res.status(500).json({ success: false, message: 'An unexpected error occurred.' });
});

// ── Start ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Allowed origins: ${allowedOrigins.join(', ')}`);
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.warn('⚠️  EMAIL_USER or EMAIL_PASSWORD not set — contact form emails will fail.');
  }
});
