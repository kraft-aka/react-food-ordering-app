import React from "react";
import classes from "./Card.module.css";

export default function Card(props) {
  // const class = "card " + props.classes;
  return (
    <div className={classes.card}>{props.children}</div>
  );
}
