import React from "react";
import Meals from "./components/Meal/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import "./styles.css";

export default function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}
