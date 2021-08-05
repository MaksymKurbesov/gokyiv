import React from "react";
import Header from "./Components/Header/Header";
import "./App.global.css";
import Previews from "./Components/Previews/Previews";
import LastParties from "./Components/LastParties/LastParties";
import Photos from "./Components/Photos/Photos";

const App = () => {
  return (
    <>
      <Header />
      <Previews />
      <LastParties />
      <Photos />
    </>
  );
};

export default App;
