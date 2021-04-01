import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.scss";

import Navbar from "./components/Navbar";
import ClickerBox from "./components/ClickerBox";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Achievements from "./components/Achievements";

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
