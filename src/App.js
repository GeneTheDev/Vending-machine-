import React from "react";
import VendingMachine from "./VendingMachine";
import Skittles from "./Skittles";
import Snickers from "./Snickers";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import Doritos from "./Doritos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path={"/"}>
          <VendingMachine />
        </Route>
        <Route exact path={"/Skittles.js"}>
          <Skittles />
        </Route>
        <Route exact path={"/Snickers.js"}>
          <Snickers />
        </Route>
        <Route exact path={"/Doritos.js"}>
          <Doritos />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
