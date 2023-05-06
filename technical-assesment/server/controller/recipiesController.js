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

const deleteRecipe = (req, res) => {
  model.deleteOne(req.params.id, (err, result) => {
    if (err) res.status(500).json(err);
    res.status(200).json(result);
  });
};

const updateRecipe = (req, res) => {
  model.updateOne(req.params.id, req.body, (err, result) => {
    if (err) res.status(500).json(err);
    res.status(200).json(result);
  });
};

const searchRecipe = (req, res) => {
  model.search(req.body.search, (err, result) => {
    if (err) res.status(500).json(err);
    res.status(200).json(result);
  });
};

module.exports = {
  getrecepie,
  addRecipe,
  deleteRecipe,
  updateRecipe,
  searchRecipe,
};
