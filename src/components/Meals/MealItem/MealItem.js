import React from "react";
import MealFormItem from "./MealFormItem";
import classes from "./MealItem.module.css";


const MealItem = (props) => {

  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        
      <MealFormItem />
      </div>
    </li>
  );
};

export default MealItem;
