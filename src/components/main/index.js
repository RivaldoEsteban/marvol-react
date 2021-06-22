import React, { useEffect, useState } from "react";
import "./main.css";
import getComics from "./getComics";
import Comics from "./comics/comics-index";
function Main() {
  const [comics, setComics] = useState([]);

  // async function getComics() {
  //   const data = await fetch(
  //     "https://gateway.marvel.com:443/v1/public/comics?apikey=f78b4321211fd5238c89b08eb3a86995"
  //   );
  //   const responseData = data.json();
  //   return responseData;
  // }

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
              <Comics comics={comics} />
            </div>
          </section>
          <section></section>
        </div>
      </div>
    </main>
  );
}

export default Main;
