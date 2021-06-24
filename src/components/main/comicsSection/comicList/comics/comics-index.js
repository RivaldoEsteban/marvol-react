import React from "react";
import { Link } from "react-router-dom";
function Comics({ comics, setComic }) {
  return comics.map((comic) => {
    function handleComic() {
      setComic(comic);
    }
    return (
      <Link to="/comic">
        <div
          className="comic"
          id={comic.id}
          key={comic.id}
          onClick={handleComic}
        >
          <img
            src={
              comic.thumbnail.path +
              "/portrait_uncanny." +
              comic.thumbnail.extension
            }
            alt="comic image"
            className="comic-image"
            width="300"
            height="450"
          />
          <h2 className="comic-title">{comic.title}</h2>
        </div>
      </Link>
    );
  });
}

export default Comics;
