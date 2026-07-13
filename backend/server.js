const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
require('dotenv').config();

const app = express();

// ── MIDDLEWARE ──
app.use(cors());
app.use(express.json());

// ── SERVE REACT BUILD ──
// After you run "npm run build" in your React folder,
// copy the dist/ folder contents into public/
// OR update this path to point to your React dist folder
// app.use(express.static(path.join(__dirname, 'public')));

// ── MONGODB CONNECTION ──
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(' MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// ── CONTACT SCHEMA ──
const contactSchema = new mongoose.Schema({
  name:      { type: String, required: true },
  email:     { type: String, required: true },
  message:   { type: String, required: true },
  createdAt: { type: Date,   default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

// ── API ROUTE — contact form ──
app.post('/api/contact', async (req, res) => {
 
  try {
    const { name, email, message } = req.body;

    // basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.'
      });
    }

    // save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(200).json({
      success: true,
      message: 'Message received successfully!'
    });

  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again.'
    });
  }
});

// ── CATCH ALL — serve React app for any other route ──
// app.get('*', (req, res) => {
// res.sendFile(path.join(__dirname, 'public', 'index.html'));
  // this makes React Router work properly —
  // any URL that isn't /api/* serves your React app
  // so refreshing on /about doesn't give a 404


// ── START SERVER ──
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});