import React from "react";
import { Link, Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Pizza from "./components/Pizza"

const App = () => {
  return (
    <>
      <NavBar />
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
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
