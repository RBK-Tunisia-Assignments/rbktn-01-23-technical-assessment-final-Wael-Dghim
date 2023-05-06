import axios from "axios";
import React from "react";

const Update = ({ recipe }) => {
  const handleSubmit = () => {
    const name = document.getElementById("name").value;
    const cookTime = document.getElementById("cook").value;
    const prepTime = document.getElementById("prep").value;
    const serve = document.getElementById("serves").value;
    const cat = document.getElementById("cat").value;
    const desc = document.getElementById("desc").value;
    const ing = document.getElementById("ing").value;
    const src = document.getElementById("src").value;

    const updatedRecipe = {
      name,
      cookTime,
      prepTime,
      serve,
      category: cat,
      desc,
      ing,
      src,
    };
    axios
      .put(
        `http://localhost:4000/api/update/${recipe.recepie_Id}`,
        updatedRecipe,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input
          defaultValue={recipe.recepie_Name}
          type="text"
          placeholder="Name"
          id="name"
        />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input
          defaultValue={recipe.Cook_Time}
          type="number"
          placeholder="Cooking Time"
          id="cook"
        />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input
          defaultValue={recipe.Prep_Time}
          type="number"
          placeholder="Preparation Time"
          id="prep"
        />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input
          defaultValue={recipe.Serves}
          type="number"
          placeholder="serves"
          id="serves"
        />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input
          defaultValue={recipe.categorie}
          type="text"
          placeholder="Category"
          id="cat"
        />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input
          defaultValue={recipe.recepie_Description}
          type="text"
          placeholder="Description"
          id="desc"
        />
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input
          defaultValue={recipe.recepie_Description}
          placeholder="Ingredients"
          id="ing"
        />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input
          defaultValue={recipe.recepie_Image}
          type="text"
          placeholder="Image URL"
          id="src"
        />
      </div>
      <button onClick={handleSubmit} className="create-recipe-btn">
        Update Recipe
      </button>
    </div>
  );
};

export default Update;
