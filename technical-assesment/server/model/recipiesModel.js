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
module.exports = { getAll, addOne, deleteOne };
