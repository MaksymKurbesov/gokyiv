import React from "react";
import Header from "./Components/Header/Header";
import "./App.global.css";
import Previews from "./Components/Previews/Previews";
import LastParties from "./Components/LastParties/LastParties";
import Photos from "./Components/Photos/Photos";
import Releases from "./Components/Releases/Releases";

const App = () => {
  return (
    <>
      <Header />
      <Previews />
      <LastParties />
      <Photos />
      <Releases />
    </>
  );
};

export default App;
