import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

test("renders app loading logo", () => {
  const { getByAltText } = render(<Provider store={store}><App /></Provider>);
  const AltTextElement = getByAltText("Logo");
  expect(AltTextElement).toBeInTheDocument();
});
