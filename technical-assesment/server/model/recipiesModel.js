const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();

const getAll = (callback) => {
  const sql = `SELECT * FROM recepie`;
  connection.query(sql, (err, result) => {
    callback(err, result);
  });
};

const addOne = (recipe, callback) => {
  const { name, cookTime, prepTime, serve, category, desc, ing, src } = recipe;
  const sql = `INSERT INTO recepie SET recepie_Name='${name}', Cook_Time='${cookTime}', Prep_Time='${prepTime}', Serves='${serve}', categorie='${category}', recepie_Image='${src}', recepie_Description='${desc}', recepie_Ingredients='${ing}',  users_user_Id=1`;
  connection.query(sql, (err, result) => {
    callback(err, result);
  });
};

const deleteOne = (id, callback) => {
  const sql = `DELETE FROM recepie WHERE recepie_Id=${id}`;
  connection.query(sql, (err, result) => {
    callback(err, result);
  });
};

const updateOne = (id, recipe, callback) => {
  const { name, cookTime, prepTime, serve, category, desc, ing, src } = recipe;
  const sql = `UPDATE recepie SET recepie_Name='${name}', Cook_Time='${cookTime}', Prep_Time='${prepTime}', Serves='${serve}', categorie='${category}', recepie_Image='${src}', recepie_Description='${desc}', recepie_Ingredients='${ing}' WHERE recepie_Id=${id}`;
  connection.query(sql, (err, result) => {
    callback(err, result);
  });
};

const search = (q, callback) => {
  const sql = `SELECT * FROM recepie WHERE recepie_Name LIKE '${q}%'`;
  connection.query(sql, (err, result) => {
    callback(err, result);
  });
};

const findFav = (id, callback) => {
  const sql = `SELECT * FROM favorites WHERE recepie_id=${id}`;
  connection.query(sql, (err, result) => {
    callback(err, result);
  });
};

const addFav = (id, callback) => {
  const sql = `INSERT INTO favorites SET recepie_id=${id}, users_id=1`;
  connection.query(sql, (err, result) => {
    callback(err, result);
  });
};

const removeFav = (id, callback) => {
  const sql = `DELETE FROM favorites WHERE recepie_id=${id}`;
  connection.query(sql, (err, result) => {
    callback(err, result);
  });
};

module.exports = {
  getAll,
  addOne,
  deleteOne,
  updateOne,
  search,
  findFav,
  addFav,
  removeFav,
};
