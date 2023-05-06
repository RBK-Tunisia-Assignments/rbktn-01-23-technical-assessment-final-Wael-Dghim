const express = require("express");
const { getrecepie, addRecipe } = require("../controller/recipiesController");
const router = express.Router();

router.get("/menuItems", getrecepie);
router.post("/add", addRecipe);

module.exports = router;
