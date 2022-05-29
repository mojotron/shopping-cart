import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Error from "../Error";
import "@testing-library/jest-dom";

const MockError = () => {
  return (
    <BrowserRouter>
      <Error />
    </BrowserRouter>
  );
};

describe("Error page", () => {
  test("has heading with text 404 page not found", () => {
    render(<MockError />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement.textContent).toBe("404 Page not Found");
  });

  test("has link to home page", () => {
    render(<MockError />);
    const linkElement = screen.getByText("back to home");
    expect(linkElement).toBeInTheDocument();
  });
});
