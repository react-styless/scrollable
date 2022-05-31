import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Scrollable from "./lib/Scrollable";

function App() {
  return (
    <div className="App">
      <Scrollable vertical={false}>
        <div className="row">
          <div className="child">123</div>
        </div>
      </Scrollable>
    </div>
  );
}

export default App;
