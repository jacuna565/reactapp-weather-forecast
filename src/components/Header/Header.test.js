import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, findByText } from "@testing-library/react";
import Header from "./index";

it("Renders correctly", () => {
  const { queryByTestId } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(queryByTestId("header-container")).toBeTruthy();
  expect(queryByTestId("header-logo")).toBeTruthy();
  expect(findByText("Weather forecast")).toBeTruthy();
});

it("Have link to root", () => {
  const { queryByTestId } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(queryByTestId("link-to-root").closest("a")).toHaveAttribute("href", "/");
})
