const express = require("express");
const {
  getrecepie,
  addRecipe,
  deleteRecipe,
  updateRecipe,
} = require("../controller/recipiesController");
const router = express.Router();

router.get("/menuItems", getrecepie);
router.post("/add", addRecipe);
router.delete("/:id", deleteRecipe);
router.put("/update/:id", updateRecipe);

module.exports = router;
