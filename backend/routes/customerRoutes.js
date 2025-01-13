const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const router = express.Router();

// Example Route: Book an appointment (Customer-only)
router.post('/appointments', verifyToken, (req, res) => {
    res.send('Customer: Appointment booked successfully');
});

// Example Route: Get customer profile
router.get('/profile', verifyToken, (req, res) => {
    res.send('Customer: Profile information');
});

module.exports = router;
