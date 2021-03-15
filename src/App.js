import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles.css";

import Navbar from "./components/Navbar";
import Clicker from "./components/Clicker";
import Achivements from "./components/Achivements";

export default function App() {
  // export const App = () => {
  const [total, setTotal] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Clicker />
      <Achivements />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
