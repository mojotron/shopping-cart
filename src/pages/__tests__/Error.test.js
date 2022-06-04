import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Error from "../Error";

const MockError = () => {
  return (
    <BrowserRouter>
      <Error />
    </BrowserRouter>
  );
};

describe("Error page", () => {
  test("render Error snapshot", () => {
    const { container } = render(<MockError />);
    expect(container).toMatchSnapshot();
  });

  test("has heading with text 404 page not found", () => {
    render(<MockError />);
    expect(screen.getByRole("heading").textContent).toBe("404 Page not Found");
  });

  test("has link to home page", () => {
    render(<MockError />);
    expect(screen.getByText("back to home")).toBeInTheDocument();
  });
});
