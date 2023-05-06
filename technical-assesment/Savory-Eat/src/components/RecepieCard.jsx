import React from "react";
import "../App.css";

const RecepieCard = ({ recipe }) => {
  return (
    <>
      <div className="card">
        <button className="delete">delete</button>
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
