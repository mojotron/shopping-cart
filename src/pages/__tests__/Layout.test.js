import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Layout from "../Layout";
import { BrowserRouter } from "react-router-dom";

const MockLayout = (props) => {
  return (
    <BrowserRouter>
      <Layout cartLength={props.cartLength} />
    </BrowserRouter>
  );
};

describe("Layout", () => {
  test("layout renders navbar", () => {
    render(<MockLayout cartLength={1} />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("layout passes right amount of cart items to cart icon", () => {
    render(<MockLayout cartLength={10} />);
    expect(screen.getByText("10")).toHaveClass("CartLink__counter");
  });
});
