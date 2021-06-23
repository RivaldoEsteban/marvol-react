import React from "react";
import "./comic.css";
import Comics from "../comics/comics-index";

function Comic({ comic }) {
  console.log(comic);
  function backtoPrincipalSection() {
    console.log("hola");
  }
  const imageComic =
    comic.thumbnail.path + "/portrait_uncanny." + comic.thumbnail.extension;
  console.log(imageComic);
  return (
    <div className="comic-info">
      <div className="comic-path">
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
      </div>
      <div className="comic-description">
        <h1> {comic.title} </h1>
        {comic.description ? (
          <div>
            <h3>Description</h3>
            <p>{comic.description}</p>
          </div>
        ) : (
          ""
        )}
        {comic.creators.items.map((creator) => {
          return (
            <div className="creator-data">
              <div className="creator">
                <h3>creator :</h3>
                <p> {creator.name}</p>
              </div>
              <div className="role">
                <h3>role :</h3>
                <p>{creator.role}</p>
              </div>
            </div>
          );
        })}
        {comic.prices >= 1
          ? comic.prices.map((price) => {
              return (
                <div>
                  <h3>Price:</h3>
                  <p>{price.price} $</p>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default Comic;
