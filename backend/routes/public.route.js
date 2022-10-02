const express = require("express");
const router = express.Router();

/* CONTROLLER */
const publicController = require("../controllers/public.controller.js");

/* HOME EXAMPLE */
router.get("/", publicController.example);

module.exports = router;
