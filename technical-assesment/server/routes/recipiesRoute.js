const express = require("express");
const {
  getrecepie,
  addRecipe,
  deleteRecipe,
} = require("../controller/recipiesController");
const router = express.Router();

router.get("/menuItems", getrecepie);
router.post("/add", addRecipe);
router.delete("/:id", deleteRecipe);

module.exports = router;
