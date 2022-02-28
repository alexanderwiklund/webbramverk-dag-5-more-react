import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DarkMode } from "./DarkMode";

ReactDOM.render(
  <React.StrictMode>
    <DarkMode>
      <App>
        <h1>START PAGE</h1>
        <p>Lite text</p>
        <div>
          <p>Mer text</p>
        </div>
      </App>
      <div>Utanför</div>
    </DarkMode>
  </React.StrictMode>,
  document.getElementById("root")
);
