import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.scss";

import Navbar from "./components/Navbar";
import Clicker from "./components/Clicker";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Achievements from "./components/Achievements";

export default function App() {
  // export const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Clicker />
      <Switch>
					<Route
						exact
						path="/clicker-app-uk/"
						render={(props) => (
							<Home />
						)}
					/>
					<Route
						exact
						path="/clicker-app-uk/Shop"
						component={Shop}
					/>
					<Route
						exact
						path="/clicker-app-uk/Achievements"
						component={Achievements}
					/>
      {/* <Achivements /> */}
      {/* <Shop /> */}
      </Switch>
    </div>
    </BrowserRouter>
  );
}
