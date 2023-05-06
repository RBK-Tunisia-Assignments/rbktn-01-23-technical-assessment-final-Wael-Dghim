import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import Update from "./Update";

const RecepieCard = ({ recipe }) => {
  const [showUpdate, setShowUpdate] = useState(false);
  console.log(recipe);
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
        <button onClick={() => setShowUpdate(!showUpdate)} className="update">
          update{" "}
        </button>
        {showUpdate ? <Update recipe={recipe} /> : ""}
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
