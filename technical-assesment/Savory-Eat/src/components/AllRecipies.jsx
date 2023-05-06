import React from "react";
import "../index.scss";
import RecepieCard from "./RecepieCard";
const AllRecepies = ({ recipes }) => {
  return (
    <>
      {recipes.map((e, i) => (
        <div key={i} className="card-container">
          <RecepieCard recipe={e} />
        </div>
      ))}
    </>
  );
};

export default AllRecepies;
