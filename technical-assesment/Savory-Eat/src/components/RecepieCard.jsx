import React from "react";
import "../App.css";
import axios from "axios";

const RecepieCard = ({ recipe }) => {
  const handleDelete = () => {
    axios
      .delete(`http://localhost:4000/api/${recipe.recepie_Id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="card">
        <button onClick={handleDelete} className="delete">
          delete
        </button>
        <button className="update">update </button>

        <>
          <div className="header">
            <img className="img" src={recipe.recepie_Image} alt="" />
          </div>
          <div className="text">
            <h1 className="food">{recipe.recepie_Name}</h1>
            <i> {recipe.Prep_Time + recipe.Cook_Time} Mins</i> <br />
            <i>Serves: {recipe.Serves}</i>
          </div>
        </>
      </div>
    </>
  );
};

export default RecepieCard;
