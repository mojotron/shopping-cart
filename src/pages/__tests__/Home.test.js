import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../Home";

describe("Home page", () => {
  test("main heading with text content", () => {
    render(<Home />);
    const headingElement = screen.getByText(/new fortnite goodies/i);
    expect(headingElement).toBeInTheDocument();
  });

  test("h2 with text content", () => {
    render(<Home />);
    const headingElement = screen.getByText(/explore the shop for/i);
    expect(headingElement).toBeInTheDocument();
  });
});
