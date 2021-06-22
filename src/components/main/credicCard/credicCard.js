import React from "react";
import "./credic-card.css";

function CredicCardMarvel() {
  return (
    <section className="section-credicCard">
      <div className="credic-card-container">
        <img
          src="images/credicCard.png"
          alt="credic card image"
          width="550px"
          height="340"
        />
      </div>
      <div className="credicCard-information">
        <p>marvel mastercard</p>
        <h3>Obtenga un crédito de estado de cuenta de $ 25</h3>
        <button>aprender más</button>
      </div>
    </section>
  );
}

export default CredicCardMarvel;
