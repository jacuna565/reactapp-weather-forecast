import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import DayDetail from "./index";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";

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
    <BrowserRouter>
      <DayDetail />
    </BrowserRouter>
  );
  expect(queryByTestId("daydetail-container")).toBeTruthy();
});
