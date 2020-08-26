import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import DayCard from "./index";

it("Renders correctly", () => {
  const {queryByTestId} = render(<BrowserRouter><DayCard /></BrowserRouter>);
  expect(queryByTestId("dayCard-container")).toBeTruthy();
})