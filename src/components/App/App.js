import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "../Navbar/Navbar";
import ClickerBox from "../Clicker/ClickerBox";
import Home from "../Home/Home";
import Shop from "../Shop/Shop";
import Achievements from "../Achievements/Achievements";
// import Achievements from "./components/Achievements/";

export default function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <ClickerBox />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/clicker-app-uk/" component={Home} />
          <Route exact path="/clicker-app-uk/Shop" component={Shop} />
          <Route
            exact
            path="/clicker-app-uk/Achievements"
            component={Achievements}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
