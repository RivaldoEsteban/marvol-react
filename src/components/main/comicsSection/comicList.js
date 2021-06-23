import React from "react";
import "./comics-style.css";
import ComicsList from "./comicList/comicList";
import Comic from "./comic/comic";
function ComicsSection({ comics, setComic, comic }) {
  return (
    <section aria-label="comic list">
      {!comic ? (
        <ComicsList comics={comics} setComic={setComic} />
      ) : (
        <Comic comic={comic} />
      )}
    </section>
  );
}

export default ComicsSection;
