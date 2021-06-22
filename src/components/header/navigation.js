import React from "react";

function Navigation() {
  return (
    <div className="header-navigation">
      <nav>
        <ul>
          <li>
            <a href="#video-page">videos</a>
          </li>
          <li>
            <a href="#characters-page">caracteres</a>
          </li>
          <li>
            <a href="#comicBooks-page">historietas</a>
          </li>
          <li>
            <a href="#movie-page">películas</a>
          </li>
          <li>
            <a href="#tv-page">programas de televión</a>
          </li>
          <li>
            <a href="#games-page">juegos</a>
          </li>
          <li>
            <a href="#news-page">noticias</a>
          </li>
          <li>
            <a href="#more">más</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
