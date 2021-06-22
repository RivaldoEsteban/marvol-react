import React, { useEffect, useState } from "react";
import "./main.css";
import getComics from "./comics/getComics";
import Comics from "./comics/comics-index";
import CredicCardMarvel from "./credicCard/credicCard";

function Main() {
  const [comics, setComics] = useState([]);
  const [comic, setComic] = useState();
  console.log(comic);
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
      <div className="wrapper">
        <div className="main-content">
          <section className="section-comics" aria-label="section comics">
            <h2 className="section-title">Nuevos Lanzamientos</h2>
            <div className="comics">
              <Comics comics={comics} setComic={setComic} />
            </div>
          </section>
          <CredicCardMarvel />
        </div>
      </div>
    </main>
  );
}

export default Main;
