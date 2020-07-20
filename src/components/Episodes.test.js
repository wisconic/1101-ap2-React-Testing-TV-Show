import React from "react";
import { render, screen } from "@testing-library/react";
import Episodes from "./Episodes";

test("Episodes renders correctly without errors -- empty episodes array", () => {
  // Episodes needs episodes to be passed in as prop
  // --> test(render) breaks without it
  render(<Episodes episodes={[]} />);
  // screen.debug();
});
