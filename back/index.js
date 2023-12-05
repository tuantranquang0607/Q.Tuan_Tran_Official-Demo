const express = require('express');
const cors = require("cors");
const emailRoutes = require('./routes/emails')

const app = express();
app.disable("x-powered-by");
app.use(cors());
app.use(express.json());
app.use(emailRoutes);
app.listen(3002, () => console.log(`App is running on http://localhost:3002`));
