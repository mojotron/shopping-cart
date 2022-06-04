import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../Home";

describe("Home page", () => {
  test("render Home snapshot", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  test("main heading with text content", () => {
    render(<Home />);
    expect(screen.getByText(/new fortnite goodies/i)).toBeInTheDocument();
  });

  test("h2 with text content", () => {
    render(<Home />);
    expect(screen.getByText(/explore the shop for/i)).toBeInTheDocument();
  });
});
