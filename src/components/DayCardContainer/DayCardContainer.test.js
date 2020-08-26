import React from "react";
import { render } from "@testing-library/react";
import DayCardContainer from "./index";
import { Provider } from "react-redux";
import store from "../../store";

it("Renders correctly", () => {
  const { queryByTestId } = render(<Provider store={store}><DayCardContainer /></Provider>);
  expect(queryByTestId("daycard-container")).toBeTruthy();
})