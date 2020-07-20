import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("App without shows renders 'fetching data' without errors", () => {
  render(<App />);
  // screen.debug();
  expect(screen.getByText(/fetching data/i)).toBeInTheDocument();
});
