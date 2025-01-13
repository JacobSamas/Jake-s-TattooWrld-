const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sequelize = require('./config/db'); 

// Import Models
const User = require('./models/User');
const Tattoo = require('./models/Tattoo');
const Appointment = require('./models/Appointment');

const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const customerRoutes = require('./routes/customerRoutes');


dotenv.config(); 

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/customer', customerRoutes);


// Base Route
app.get('/', (req, res) => {
    res.send('Welcome to Jake\'s TattooWrld API');
});

// Sync Database
sequelize.sync({ force: false }) 
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
