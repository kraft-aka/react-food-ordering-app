import React, { useState, useRef } from "react";
import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";

export default function MealItemForm(props) {
  const [validAmount, setValidAmount] = useState(true);
  const mealAmountRef = useRef();
  function submitHandler(e) {
    e.preventDefault();

    const enteredItemAmount = mealAmountRef.current.value;
    const enteredItemAmountNumber = +enteredItemAmount;

    if (
      enteredItemAmount.trim().length === 0 ||
      enteredItemAmountNumber === 0 ||
      enteredItemAmountNumber < 5
    ) {
      setValidAmount(false);
      return;
    }
    props.onAddToCart(enteredItemAmountNumber);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={mealAmountRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="button">+ Add</button>
      {!validAmount && <p>Please enter a valid amount between 1-5.</p>}
    </form>
  );
}
0;
