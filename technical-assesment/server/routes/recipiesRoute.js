const express = require("express");
const {
  getrecepie,
  addRecipe,
  deleteRecipe,
  updateRecipe,
  searchRecipe,
  favRecipe,
  addFavRecipe,
  removeFavRecipe,
} = require("../controller/recipiesController");
const router = express.Router();

router.get("/menuItems", getrecepie);
router.get("/fav/:id", favRecipe);

router.post("/add", addRecipe);
router.post("/search", searchRecipe);
router.post("/fav", addFavRecipe);

router.delete("/:id", deleteRecipe);
router.delete("/fav/:id", removeFavRecipe);

router.put("/update/:id", updateRecipe);

module.exports = router;
