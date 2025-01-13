const Tattoo = require('../models/Tattoo');

// Create a new tattoo
exports.createTattoo = async (req, res) => {
    const { title, description, imageUrl, price } = req.body;

    try {
        const tattoo = await Tattoo.create({ title, description, imageUrl, price });
        res.status(201).json({ message: 'Tattoo created successfully', tattoo });
    } catch (error) {
        res.status(500).json({ message: 'Error creating tattoo', error: error.message });
    }
};

// Get all tattoos
exports.getAllTattoos = async (req, res) => {
    try {
        const tattoos = await Tattoo.findAll();
        res.status(200).json(tattoos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tattoos', error: error.message });
    }
};

// Get a single tattoo by ID
exports.getTattooById = async (req, res) => {
    const { id } = req.params;

    try {
        const tattoo = await Tattoo.findByPk(id);

        if (!tattoo) {
            return res.status(404).json({ message: 'Tattoo not found' });
        }

        res.status(200).json(tattoo);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tattoo', error: error.message });
    }
};

// Update a tattoo by ID
exports.updateTattoo = async (req, res) => {
    const { id } = req.params;
    const { title, description, imageUrl, price } = req.body;

    try {
        const tattoo = await Tattoo.findByPk(id);

        if (!tattoo) {
            return res.status(404).json({ message: 'Tattoo not found' });
        }

        await tattoo.update({ title, description, imageUrl, price });
        res.status(200).json({ message: 'Tattoo updated successfully', tattoo });
    } catch (error) {
        res.status(500).json({ message: 'Error updating tattoo', error: error.message });
    }
};

// Delete a tattoo by ID
exports.deleteTattoo = async (req, res) => {
    const { id } = req.params;

    try {
        const tattoo = await Tattoo.findByPk(id);

        if (!tattoo) {
            return res.status(404).json({ message: 'Tattoo not found' });
        }

        await tattoo.destroy();
        res.status(200).json({ message: 'Tattoo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting tattoo', error: error.message });
    }
};

// Get all tattoos (Customer)
exports.getAvailableTattoos = async (req, res) => {
    try {
        const tattoos = await Tattoo.findAll();
        res.status(200).json(tattoos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tattoos', error: error.message });
    }
};