import React, { useEffect } from "react";
import Card from "./Card";
import Button from "./Button";
import "./ErrorModal.css";

export default function ErrorModal(props) {
  // TODO: function to hide modal
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
    <div className="backdrop" onClick={clickHandlerModal}>
      <Card className="modal">
        <div className="header">
          <h2>{props.title}</h2>
        </div>

        <p className="content">{props.message}</p>

        <Button className="actions" onClick={clickHandlerModal}>
          OKAY!
        </Button>
      </Card>
    </div>
  );
}
