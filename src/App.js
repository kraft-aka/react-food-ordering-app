import React, { useState } from "react";
import Meals from "./components/Meal/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import "./styles.css";

export default function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler() {
    setCartIsShown(true);
  }

  function hideCartHandler() {
    setCartIsShown(false);
  }

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}
