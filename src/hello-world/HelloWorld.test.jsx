import React from "react";
import HelloWorld from "./HelloWorld";
import { render, screen } from "@testing-library/react";

test("Рендеринг каомпонента HelloWorld", () => {
  render(<HelloWorld />);
  expect(screen.getByText("Hello world")).toBeInTheDocument();
});
