import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoadingSpinner from "../LoadingSpinner";

describe("LoadingSpinner component", () => {
  test("has image", () => {
    render(<LoadingSpinner />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
  });

  test("image has spinning class", () => {
    render(<LoadingSpinner />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveClass("LoadingSpinner__spinner");
  });
});
