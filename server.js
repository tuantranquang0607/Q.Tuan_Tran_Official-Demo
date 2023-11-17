require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes.js');
const app = express();
const port = 3000;
const nodemailer = require('nodemailer');

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_KEY
    }
});

app.use(cors());

app.use(bodyParser.json());

// Include your routes
app.use('/', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong! ' + err.message);
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});

