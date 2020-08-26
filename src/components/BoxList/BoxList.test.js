import React from "react";
import { render } from "@testing-library/react";
import BoxList from "./index";


it("Renders correctly", () => {
  const {queryByTestId} = render(<BoxList />);
  expect(queryByTestId("boxlist-container")).toBeTruthy();
})