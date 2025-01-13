const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/db'); // Import the database connection

// Import Models
const User = require('./models/User');
const Tattoo = require('./models/Tattoo');
const Appointment = require('./models/Appointment');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Base Route
app.get('/', (req, res) => {
    res.send('Welcome to Jake\'s TattooWrld API');
});

// Sync Database
sequelize.sync({ force: false }) // Change to true to drop and recreate tables
    .then(() => {
        console.log('Database connected and synced successfully');
    })
    .catch(err => {
        console.error('Error syncing database:', err.message);
    });

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
