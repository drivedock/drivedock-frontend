import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import "./index.css";
import "./stylesheets/default.css";
import "../src/index.css";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
 <React.StrictMode>
  <BrowserRouter>
   <App />
  </BrowserRouter>
 </React.StrictMode>,
 document.getElementById("root")
);
