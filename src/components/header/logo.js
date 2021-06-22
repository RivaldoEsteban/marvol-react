import React from "react";

function Logo() {
  return (
    <div className="header-logo">
      <button className="header-register-btn">
        <a href="#check-in">Registrarse</a>|<a href="#join">Unirse</a>
      </button>
      <a href="/">
        <img className="logo" src="images/marvol-logo.png" alt="logo" />
      </a>
    </div>
  );
}

export default Logo;
