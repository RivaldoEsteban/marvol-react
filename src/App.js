import React, { useEffect } from "react";
import Header from "./components/header/index";
import Hero from "./components/hero/index";
import Main from "./components/main/index";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
