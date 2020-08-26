import React from "react";
import { render } from "@testing-library/react";
import Graphic from "./index";

it("Renders correctly", () => {
  const { queryByTestId } = render( <Graphic />);
  expect(queryByTestId("graphic-container")).toBeTruthy();
});