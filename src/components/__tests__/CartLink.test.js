import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import CartLink from "../CartLink";

const MockCartLink = (props) => {
  return (
    <BrowserRouter>
      <CartLink cartLength={props.cartLength} />
    </BrowserRouter>
  );
};

describe("CarLink component", () => {
  test("render shopping cart icon", () => {
    render(<MockCartLink cartLength={1} />);
    expect(screen.getByRole("img")).toHaveClass("CartLink__icon");
  });

  test("render shopping cart counter when items are added", () => {
    render(<MockCartLink cartLength={5} />);
    expect(screen.getByText("5")).toHaveClass("CartLink__counter");
  });

  test("not rendering shopping counter when items are 0", () => {
    render(<MockCartLink cartLength={0} />);
    expect(screen.queryByText("0")).toBe(null);
  });
});
