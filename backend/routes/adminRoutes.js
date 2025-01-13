const express = require('express');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const router = express.Router();

// Example Route: Get all users (Admin-only)
router.get('/users', verifyToken, isAdmin, (req, res) => {
    res.send('Admin: List of all users');
});

// Example Route: Manage tattoos (Admin-only)
router.post('/tattoos', verifyToken, isAdmin, (req, res) => {
    res.send('Admin: Create or manage tattoos');
});

module.exports = router;
