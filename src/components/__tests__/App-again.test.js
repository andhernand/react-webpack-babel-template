import React from "react";
import {render, screen} from "@testing-library/react";
import App from "../App";

test("App contains expected roles", () => {
  render(<App />);

  const banner = screen.getByRole("banner");
  expect(banner).toBeTruthy();

  const header = screen.getByRole("heading");
  expect(header).toBeTruthy();

  const nav = screen.getByRole("navigation");
  expect(nav).toBeTruthy();

  const main = screen.getByRole("main");
  expect(main).toBeTruthy();

  const footer = screen.getByRole("contentinfo");
  expect(footer).toBeTruthy();
});
