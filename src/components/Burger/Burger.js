import React from "react";

import "./Burger.css";
import BurgerIngredient from "./Burgeringredient/Burgeringredient";

const burger = props => {
  const transformedIngredient = Object.keys(props.ingredients).map(igKey => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + 1} type={igKey} />;
    });
  });

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
