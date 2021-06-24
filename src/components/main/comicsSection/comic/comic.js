import React, { useEffect } from "react";
import "./comic.css";
import { Link } from "react-router-dom";

function Comic({ comic }) {
  console.log(comic);
  // console.log(comic);
  // const imageComic =
  //   comic.thumbnail.path + "/portrait_uncanny." + comic.thumbnail.extension;
  // console.log(imageComic);
  return (
    <div className="comic-container">
      <div className="comic-header">
        <div className="wrapper">
          <Link to="/marvol-react/">
            <button>
              <img src="images/icons/arrow-left.png" alt="" />
              Home
            </button>
          </Link>
        </div>
      </div>
      <div className="wrapper">
        <div className="comic-content">
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
                <p>{comic.description}</p>
              </div>
            ) : (
              ""
            )}
            <div className="creator-container">
              {comic.creators.items.map((creator) => {
                return (
                  <div className="creator-data">
                    <div className="creator">
                      <h3>creator :</h3>
                      <p> {`${creator.name} , ${creator.role}`}</p>
                    </div>
                  </div>
                );
              })}
            </div>
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
      </div>
    </div>
  );
}

export default Comic;
