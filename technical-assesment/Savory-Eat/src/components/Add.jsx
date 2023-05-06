import React from "react";
import "../App.css";
import axios from "axios";

const Add = () => {
  const handleSubmit = () => {
    const name = document.getElementById("name").value;
    const cookTime = document.getElementById("cook").value;
    const prepTime = document.getElementById("prep").value;
    const serve = document.getElementById("serves").value;
    const cat = document.getElementById("cat").value;
    const desc = document.getElementById("desc").value;
    const ing = document.getElementById("ing").value;
    const src = document.getElementById("src").value;

    const recipe = {
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
      .post("http://localhost:4000/api/add", recipe, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" id="name" />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" id="cook" />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" id="prep" />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" id="serves" />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" id="cat" />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" id="desc" />
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" id="ing" />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" id="src" />
      </div>
      <button onClick={handleSubmit} className="create-recipe-btn">
        Create Recipe
      </button>
    </div>
  );
};
export default Add;
