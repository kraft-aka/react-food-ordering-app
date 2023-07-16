import React from "react";
import mealsImg from '../../assets/meals.jpg'

import classes from './Header.module.css'

export default function Header(props) {
  return (
    <>
    <header className={classes.header}>
    <h1>Reactive Food</h1>
    <button>Cart</button>
  </header>
  <div className={classes['main-image']}>
    <img src={mealsImg} alt="A table of food" />
  </div>
    </>
    
  );
}
