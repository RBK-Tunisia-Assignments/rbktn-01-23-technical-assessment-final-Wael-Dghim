//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Home from "./components/Home.jsx";
import AllRecepies from "./components/AllRecipies.jsx";
import Add from "./components/Add";

function App() {
  const [view, setView] = useState("Home");
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  let changeView = (view) => {
    setView(view);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/menuItems")
      .then((res) => setRecipes(res.data));
  }, []);

  const handleSearch = () => {
    axios
      .post(
        "http://localhost:4000/api/search",
        { search },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  };
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
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
      {view === "Home" && <Home changeView={changeView} />}
      {view === "Allrecepies" && <AllRecepies recipes={recipes} />}
      {view === "Addrecepie" && <Add />}

      <div></div>
    </div>
  );
}

export default App;
