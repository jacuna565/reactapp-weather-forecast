import React from "react";
import { render } from "@testing-library/react";
import Tooltip from "./index";


it("Renders correctly", () => {
  const {queryByTestId} = render(<Tooltip />);
  expect(queryByTestId("tooltip-container")).toBeTruthy();
})