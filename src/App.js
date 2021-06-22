import React, { useEffect } from "react";
import Header from "./components/header/index";
import Hero from "./components/hero/index";
import Main from "./components/main/index";

function App() {
  // async function api() {
  //   const data = await fetch(
  //     "https://gateway.marvel.com:443/v1/public/comics?apikey=f78b4321211fd5238c89b08eb3a86995"
  //   );
  //   const responseData = data.json();
  //   return responseData;
  // }
  // api().then((value) => console.log(value));
  // api().catch((error) => console.log(error));
  // useEffect(api, [api]);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
    </div>
  );
}

export default App;
