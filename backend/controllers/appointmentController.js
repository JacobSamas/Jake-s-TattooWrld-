const Appointment = require('../models/Appointment');
const User = require('../models/User');
const Tattoo = require('../models/Tattoo');

// Book an appointment
exports.bookAppointment = async (req, res) => {
    const { date, tattooId } = req.body;

    try {
        // Ensure tattoo exists
        const tattoo = await Tattoo.findByPk(tattooId);
        if (!tattoo) {
            return res.status(404).json({ message: 'Tattoo not found' });
        }

        // Create appointment
        const appointment = await Appointment.create({
            date,
            userId: req.user.id, // Extracted from JWT middleware
            tattooId,
            status: 'pending',
        });

        res.status(201).json({ message: 'Appointment booked successfully', appointment });
    } catch (error) {
        res.status(500).json({ message: 'Error booking appointment', error: error.message });
    }
};

// Get all appointments for the logged-in user
exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll({
            where: { userId: req.user.id },
            include: [Tattoo], // Include tattoo details
        });

        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments', error: error.message });
    }
};

// Cancel an appointment
exports.cancelAppointment = async (req, res) => {
    const { id } = req.params;

    try {
        const appointment = await Appointment.findByPk(id);

        if (!appointment || appointment.userId !== req.user.id) {
            return res.status(404).json({ message: 'Appointment not found or unauthorized' });
        }

        await appointment.update({ status: 'cancelled' });
        res.status(200).json({ message: 'Appointment cancelled successfully', appointment });
    } catch (error) {
        res.status(500).json({ message: 'Error cancelling appointment', error: error.message });
    }
};
