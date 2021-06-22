import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="wrapper">
        <div className="footer-content">
          <div className="logo-nav">
            <a href="/">
              <img src="images/marvol-logo.png" alt="logo" />
            </a>
            <nav className="footer-navigation">
              <ul>
                <li>
                  <a rel=" noreferrer" href="#sobre-marvel">
                    sobre marvel
                  </a>
                </li>
                <li>
                  <a rel=" noreferrer" href="#help">
                    ayuda / preguntas frecuentes
                  </a>
                </li>
                <li>
                  <a rel=" noreferrer" href="#careers">
                    carreras
                  </a>
                </li>
                <li>
                  <a rel=" noreferrer" href="#internships">
                    pasantías
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a rel=" noreferrer" href="#advertising">
                    publicidad
                  </a>
                </li>
                <li>
                  <a
                    rel=" noreferrer"
                    href="https://www.marvel.com/"
                    target="_blank"
                  >
                    marvelhq.com
                  </a>
                </li>
                <li>
                  <a rel=" noreferrer" href="#exchange">
                    canjear cómics digitales
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="social-media">
            <p>sigue a marvel</p>
            <div className="social-media-icons">
              <a rel=" noreferrer" href="#" target="_blank">
                <img src="images/icons/facebook.png" alt="icon facebook" />
              </a>
              <a rel=" noreferrer" href="#" target="_blank">
                <img src="images/icons/twitter.png" alt="icon twitter" />
              </a>
              <a rel=" noreferrer" href="#" target="_blank">
                <img src="images/icons/instagram.png" alt="icon instagram" />
              </a>
              <a rel=" noreferrer" href="#" target="_blank">
                <img src="images/icons/youtube.png" alt="icon youtube" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
