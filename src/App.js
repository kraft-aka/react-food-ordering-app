import React from "react";
import Meals from "./components/Meal/Meals";
import Header from "./components/Layout/Header";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}
