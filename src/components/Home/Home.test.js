import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Home from "./index";
import { Provider } from "react-redux";
import store from "../../store";


jest.mock("react-apexcharts", () =>
  jest.fn(() => {
    return null;
  })
);
jest.mock("apexcharts", () => ({
  exec: jest.fn(() => {
    return new Promise((resolve, reject) => {
      resolve("uri");
    });
  }),
}));

it("Renders correctly", () => {
  const { queryByTestId } = render(<Provider store={store}><Home /></Provider>);
  expect(queryByTestId("home-container")).toBeTruthy();
})

describe("Select thermometric unit option", () => {
  it("Click event works", () => {
    const { queryByTestId } = render(<Provider store={store}><Home /></Provider>);
    const spanElement =  queryByTestId("span-clicked");
    fireEvent.click(spanElement);
    expect(spanElement).toBeTruthy();
  })
})