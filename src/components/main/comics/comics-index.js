import React from "react";

function Comics({ comics }) {
  return comics.map((comic) => {
    console.log(comic.title);
    return (
      <div className="comic">
        <h2 className="comic-title">{comic.title}</h2>
        <img
          src={
            comic.thumbnail.path +
            "/portrait_uncanny." +
            comic.thumbnail.extension
          }
          alt="comic image"
          className="comic-image"
        />
      </div>
    );
  });
}

export default Comics;
