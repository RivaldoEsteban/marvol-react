import React, { useEffect, useState } from "react";
import "./main.css";
import getComics from "./comics/getComics";
import Comics from "./comics/comics-index";
import CredicCardMarvel from "./credicCard/credicCard";
import Comic from "./comic/comic";

function Main() {
  const [comics, setComics] = useState([]);
  const [comic, setComic] = useState();

  useEffect(() => {
    getComics()
      .then((value) => {
        const data = value.data.results.filter(
          (data) => !data.thumbnail.path.includes("image")
        );
        setComics(data);
      })
      .catch((error) => console.log(error));
  }, [getComics]);

  return (
    <main className="main-container">
      <div className="main-content">
        <section className="section-comics" aria-label="section comics">
          <div className="comics-container">
            {comic ? (
              <div className="back-to-main">
                <div className="wrapper">
                  <button>
                    <img src="./images/icons/arrow-left.png" alt="arrow left" />
                    volver
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}

            {!comic ? (
              <div className="comic-list">
                <div className="wrapper">
                  <h2 className="section-title">Nuevos Lanzamientos</h2>
                  <div className="comics">
                    <Comics comics={comics} setComic={setComic} />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="comic-background"></div>
                <div className="wrapper">
                  <div className="comic">
                    <Comic comic={comic} setComic={setComic} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
      <CredicCardMarvel />
    </main>
  );
}

export default Main;
