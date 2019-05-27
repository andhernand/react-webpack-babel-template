import React from "react";
import { render, cleanup } from "react-testing-library";
import App from "../App";

afterEach(cleanup);

it("App successfully renders", () => {
  const { getByText } = render(<App />);
  getByText("React Webpack Babel Template");
});
