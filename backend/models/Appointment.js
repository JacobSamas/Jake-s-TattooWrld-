const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Tattoo = require('./Tattoo');

const Appointment = sequelize.define('Appointment', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'cancelled'),
        defaultValue: 'pending',
    },
}, {
    timestamps: true,
});

// Associations
Appointment.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
Appointment.belongsTo(Tattoo, { foreignKey: 'tattooId', onDelete: 'CASCADE' });

module.exports = Appointment;
