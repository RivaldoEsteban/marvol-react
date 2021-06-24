import React from "react";
import "./comics-style.css";
import ComicsList from "./comicList/comicList";
import Comic from "./comic/comic";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

function ComicsSection({ comics, setComic, comic }) {
  return (
    <section aria-label="comic list">
      <Switch>
        <Route path="/marvol-react/" exact>
          <ComicsList comics={comics} setComic={setComic} />
        </Route>
        <Route path="/marvol-react/comic" exact>
          <Comic comic={comic} />
        </Route>
      </Switch>
    </section>
  );
}

export default ComicsSection;
