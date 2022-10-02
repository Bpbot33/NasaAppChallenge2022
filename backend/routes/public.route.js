const express = require("express");
const router = express.Router();

/* CONTROLLER */
const publicController = require("../controllers/public.controller.js");

/* HOME EXAMPLE */
router.get("/search", publicController.searchResponse);
router.post("/search", publicController.searchPost);

module.exports = router;
