import React from "react";
import { Link, Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
