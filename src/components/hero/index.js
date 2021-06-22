import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="hero-container" aria-label="hero-component">
      <div className="wrapper">
        <div className="hero-txt">
          <p>MARVEL ILIMITADO</p>
          <h1>QUE VIENE ESTE AÑO</h1>
          <button>próximamente</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
