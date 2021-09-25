import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { NavProvider } from "./nav-context";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavProvider>
        <App />
      </NavProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
