import React from "react";

const Recipie = ({ title, calories, image }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Calories {calories}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Recipie;
