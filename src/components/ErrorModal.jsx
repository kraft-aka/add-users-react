import React, { useEffect } from "react";
import Card from "./Card";
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
    <div className="backdrop">
      <div className="modal">
        <div className="header">
          <h2>Error Message</h2>
        </div>

        <p className="content">Username and user Age required!</p>

        <div className="actions" onClick={clickHandlerModal}>
          X
        </div>
      </div>
    </div>
  );
}
