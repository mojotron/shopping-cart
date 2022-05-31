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
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveClass("CartLink__icon");
  });
  test("render shopping cart counter when items are added", () => {
    render(<MockCartLink cartLength={5} />);
    const divElement = screen.getByTestId("cart-item-counter");
    expect(divElement.textContent).toBe("5");
  });
  test("not rendering shopping counter when items are 0", () => {
    render(<MockCartLink cartLength={0} />);
    const divElement = screen.queryByTestId("cart-item-counter");
    expect(divElement).toBe(null);
  });
});
