const express = require('express');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const {
    createTattoo,
    getAllTattoos,
    getTattooById,
    updateTattoo,
    deleteTattoo
} = require('../controllers/tattooController');
const {
    getAllAppointments,
    updateAppointmentStatus,
} = require('../controllers/appointmentController');

const router = express.Router();

// Create a new tattoo
router.post('/tattoos', verifyToken, isAdmin, createTattoo);

// Get all tattoos
router.get('/tattoos', verifyToken, isAdmin, getAllTattoos);

// Get a single tattoo by ID
router.get('/tattoos/:id', verifyToken, isAdmin, getTattooById);

// Update a tattoo by ID
router.put('/tattoos/:id', verifyToken, isAdmin, updateTattoo);

// Delete a tattoo by ID
router.delete('/tattoos/:id', verifyToken, isAdmin, deleteTattoo);

// Get all appointments (Admin-only)
router.get('/appointments', verifyToken, isAdmin, getAllAppointments);

// Update appointment status (Admin-only)
router.put('/appointments/:id/status', verifyToken, isAdmin, updateAppointmentStatus);

module.exports = router;
