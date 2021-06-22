import React from "react";
import "./header.css";
import Navigation from "./navigation";
import Logo from "./logo";

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <div>
          <div className="wrapper">
            <Logo />
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
