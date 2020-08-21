import React from "react";
import { Link, Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Pizza from "./components/Pizza"

const App = () => {
  return (
    <>
      <NavBar />
      <h1>Lambda Eats</h1>
        <p>Because great coders need the best food service ISA's and RCI's can offer!</p>
        <Switch>
          <Route path="/pizza">
            <Pizza />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/">
            ErrorPage. Wrong url.
          </Route>
        </Switch>
    </>
  );
};
export default App;
