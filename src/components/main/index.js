import React, { useEffect, useState } from "react";
import "./main.css";
import getComics from "./comicsSection/comics/getComics";
import CredicCardMarvel from "./credicCard/credicCard";

import ComicsSection from "./comicsSection/comicList";

function Main() {
  const [comics, setComics] = useState([]);

  const [comic, setComic] = useState();
  //setComics resivira la respueta del fetch a la api , donde ya optendremos los datos de los comics
  useEffect(() => {
    getComics()
      .then((value) => {
        const comicsData = value.data.results.filter(
          (data) => !data.thumbnail.path.includes("image")
        );
        setComics(comicsData);
      })
      .catch((error) => console.log(error));
  }, [getComics]);

  return (
    <main className="main-container">
      <ComicsSection comics={comics} setComic={setComic} comic={comic} />
      <CredicCardMarvel />
    </main>
  );
}

export default Main;
