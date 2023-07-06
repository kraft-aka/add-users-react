import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

function Backdrop(props) {
  return <div className="backdrop" onClick={props.clickHandlerModal}></div>;
}

function ModalOverlay(props) {
  return (
    <Card className="modal">
      <div className="header">
        <h2>{props.title}</h2>
      </div>
      <p className="content">{props.message}</p>
      <footer className="actions">
        <Button onClick={props.clickHandlerModal}>OKAY!</Button>
      </footer>
    </Card>
  );
}

export default function ErrorModal(props) {
  function clickHandlerModal(e) {
    props.closeModal();
  }

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        props.closeModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.clickHandlerModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.clickHandlerModal}
        />,
        document.getElementById("modal-overlay-root")
      )}
    </>
  );
}
