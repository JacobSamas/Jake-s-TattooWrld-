const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const {
    bookAppointment,
    getAppointments,
    cancelAppointment,
} = require('../controllers/appointmentController');

const router = express.Router();

// Book an appointment
router.post('/appointments', verifyToken, bookAppointment);

// Get all appointments for the logged-in user
router.get('/appointments', verifyToken, getAppointments);

// Cancel an appointment
router.put('/appointments/:id/cancel', verifyToken, cancelAppointment);

module.exports = router;
