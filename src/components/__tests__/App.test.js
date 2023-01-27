import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "../App";

const rootElement = document.createElement("div");
const root = ReactDOMClient.createRoot(rootElement);

test("App renders without crashing", () => {
  root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
  );

  root.unmount();
});
