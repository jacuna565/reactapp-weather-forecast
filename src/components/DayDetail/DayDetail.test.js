import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import DayDetail from "./index";
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
  const { queryByTestId } = render(
    <Provider store={store}>
      <BrowserRouter>
        <DayDetail />
      </BrowserRouter>
    </Provider>
  );
  expect(queryByTestId("daydetail-container")).toBeTruthy();
});
