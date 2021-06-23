import React from "react";

async function getComics() {
  const data = await fetch(
    "https://gateway.marvel.com:443/v1/public/comics?&apikey=f78b4321211fd5238c89b08eb3a86995"
  );
  const responseData = data.json();
  return responseData;
}
export default getComics;
