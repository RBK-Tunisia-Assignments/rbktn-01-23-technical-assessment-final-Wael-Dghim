//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Home from "./components/Home.jsx";
import AllRecepies from "./components/AllRecipies.jsx";

function App() {
  const [view, setView] = useState("Home");
  const [recipes, setRecipes] = useState([]);
  let changeView = (view) => {
    setView(view);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/menuItems")
      .then((res) => setRecipes(res.data));
  }, []);
  return (
    <div className="App">
      <nav className="nav">
        <div
          className="nav-item is-active"
          active-color="orange"
          onClick={() => setView("Home")}
        >
          Home
        </div>

        <div
          className="nav-item"
          active-color="green"
          onClick={() => setView("Allrecepies")}
        >
          All Recipies
        </div>
        <div
          className="nav-item"
          active-color="red"
          onClick={() => setView("Addrecepie")}
        >
          Addrecepie
        </div>
        <div className="nav-item" active-color="red">
          <input type="text" />
          <button>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
      {view === "Home" && <Home changeView={changeView} />}
      {view === "Allrecepies" && <AllRecepies recipes={recipes} />}

      <div></div>
    </div>
  );
}

export default App;
