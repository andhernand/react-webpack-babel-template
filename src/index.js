import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./components/App.js";
import "./style.css";

const rootElement = document.getElementById("app");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
