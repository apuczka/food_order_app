import React, {useContext, useEffect, useState} from "react";
import CartContex from "../../store/cart-contex";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHightLighted, setBtnIsHightLighted] = useState(false);
  const cartCtx = useContext(CartContex);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const { items} = cartCtx
  const btnClasses = `${classes.button} ${btnIsHightLighted ? classes.bump : ""}`
  useEffect(() => {
    if(items.length === 0 ) {
      return
    }

    setBtnIsHightLighted(true)

   const timer = setTimeout(() => {
setBtnIsHightLighted(false)
    }, 300)

    return () => {
      clearTimeout(timer);
    }

  }, [items])
  
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
