import React from "react";

function Comics({ comics, setComic }) {
  return comics.map((comic) => {
    function handleComic() {
      setComic(comic);
    }
    return (
      <div className="comic" id={comic.id} key={comic.id} onClick={handleComic}>
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
    );
  });
}

export default Comics;
