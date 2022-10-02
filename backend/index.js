require("dotenv").config();

/* REQUIRED */
const express = require("express");
const PORT = process.env.PORT;
const cors = require("cors");
const publicRouter = require("./routes/public.route");

/* INITIALIZATIONS */
const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* ROUTES */
app.use(publicRouter);

/* CONNECTION */
app.listen(PORT || 5000, () => console.log(`Server running on port ${PORT}`));
