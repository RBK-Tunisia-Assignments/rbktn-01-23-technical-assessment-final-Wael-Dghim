const express = require("express");
const { getrecepie } = require("../controller/recipiesController");
const router = express.Router();

router.get("/menuItems", getrecepie);

module.exports = router;
