const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/submit-form", (req, res) => {
    const transporter = nodemailer.createTransport({
        service: "SendGrid",
        auth: {
            user: "apikey",
            pass: "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",
        },
    });

    // Can thay doi dia chi email va SENDGRID_KEY phu hop
    transporter.sendMail({ from: "nguyen.ngoc.hai@vsi-international.com", to: "hainn2009@gmail.com", text: req.body.text }, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return res.status(500).send(error.toString());
        }
        console.log("Email sent successfully:", info.response);
        res.status(200).send("Email sent: " + info.response);
    });
});

module.exports = router;
