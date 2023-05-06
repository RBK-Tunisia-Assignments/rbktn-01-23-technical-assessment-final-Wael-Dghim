import React, { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import Update from "./Update";

const RecepieCard = ({ recipe }) => {
  const [showUpdate, setShowUpdate] = useState(false);
  const [fav, setFav] = useState(null);

  const handleDelete = () => {
    if (recipe.users_user_Id === 1) {
      axios
        .delete(`http://localhost:4000/api/${recipe.recepie_Id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      alert("not your recipe");
    }
  };

  const addFav = () => {
    axios
      .post(
        `http://localhost:4000/api/fav`,
        { id: recipe.recepie_Id },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const removeFav = () => {
    axios
      .delete(`http://localhost:4000/api/fav/${recipe.recepie_Id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/fav/${recipe.recepie_Id}`)
      .then((res) => {
        if (res.data.length) setFav(true);
        else setFav(false);
      });
  }, []);

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
        {!fav ? (
          <button onClick={addFav}>Add to favorites</button>
        ) : (
          <button onClick={removeFav}>Remove from favorites</button>
        )}
      </div>
    </>
  );
};

export default RecepieCard;
