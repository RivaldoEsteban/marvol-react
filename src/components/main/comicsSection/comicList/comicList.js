import React from "react";
import Comics from "./comics/comics-index";
import "./comicslist.css";

function ComicsList({ comics, setComic }) {
  return (
    <div className="wrapper">
      <div className="comicList-content">
        <h1 className="title-section-comicList">los mejores comics</h1>
        <div className="comics-list">
          <Comics comics={comics} setComic={setComic} />
        </div>
      </div>
    </div>
  );
}

export default ComicsList;
