const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/submit-form', (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
            user: 'apikey',
            pass: process.env.SENDGRID_KEY
        }
    });


    // Email content
    const mailOptions = {
        from: email,
        to: 'tuan.tran6703@gmail.com', // Your receiving email address
        text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).send(error.toString());
        }
        console.log('Email sent successfully:', info.response);
        res.status(200).send('Email sent: ' + info.response);
    });
});

module.exports = router;
