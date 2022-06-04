import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingSpinner from "../LoadingSpinner";

describe("LoadingSpinner component", () => {
  test("render LoadingSpinner snapshot", () => {
    const { container } = render(<LoadingSpinner />);
    expect(container).toMatchSnapshot();
  });

  test("has image", () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("image has spinning class", () => {
    render(<LoadingSpinner />);
    expect(screen.getByRole("img")).toHaveClass("LoadingSpinner__spinner");
  });
});
