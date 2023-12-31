import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose} />;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}
const portalEl = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalEl)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalEl
      )}
    </>
  );
}
