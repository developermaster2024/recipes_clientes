import React from "react";
import { Link } from "react-router-dom";

const ButtonItems = () => {
  return (
    <div className="bg-zinc-300 w-72 h-12 p-2 flex justify-around rounded-t-lg ">
      <Link to={"/sellers/:slug/recipes"}>
        <p>Recipes</p>
      </Link>
      <Link to={"/sellers/:slug/recipes"}>
        <p>Plans</p>
      </Link>
      <Link to={"/sellers/:slug/combos"}>
        <p>Combos</p>
      </Link>
    </div>
  );
};

export default ButtonItems;
