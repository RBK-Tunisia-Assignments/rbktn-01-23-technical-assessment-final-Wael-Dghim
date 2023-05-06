const model = require("../model/recipiesModel");

const getrecepie = (req, res) => {
  model.getAll((err, result) => {
    if (err) res.status(500).json(err);
    res.status(200).json(result);
  });
};

const addRecipe = (req, res) => {
  model.addOne(req.body, (err, result) => {
    if (err) res.status(500).json(err);
    res.status(200).json(result);
  });
};

module.exports = {
  getrecepie,
  addRecipe,
};
