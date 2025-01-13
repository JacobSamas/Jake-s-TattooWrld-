const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const {
    bookAppointment,
    getAppointments,
    cancelAppointment,
    getCustomerAppointments
} = require('../controllers/appointmentController');
const {
    getAvailableTattoos,
} = require('../controllers/tattooController');

const router = express.Router();

// Book an appointment
router.post('/appointments', verifyToken, bookAppointment);

// Get all appointments for the logged-in user
router.get('/appointments', verifyToken, getAppointments);

// Cancel an appointment
router.put('/appointments/:id/cancel', verifyToken, cancelAppointment);

// Get all available tattoos
router.get('/tattoos', verifyToken, getAvailableTattoos);

// Get all appointments for the logged-in customer
router.get('/appointments', verifyToken, getCustomerAppointments);

module.exports = router;
