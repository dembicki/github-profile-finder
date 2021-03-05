/* eslint-disable react/jsx-filename-extension */
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import Factorial from "./screens/Factorial";
import Repo from "./screens/Repo";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:username/:repoName/commits">
          <Repo />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/factorial">
          <Factorial />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
