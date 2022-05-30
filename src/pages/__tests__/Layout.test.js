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
    const navbarElement = screen.getByRole("navigation");
    expect(navbarElement).toBeInTheDocument();
  });

  test("layout passes right amount of cart items to cart icon", () => {
    render(<MockLayout cartLength={10} />);
    const cartItemCounterElement = screen.getByTestId("cart-item-counter");
    expect(cartItemCounterElement.textContent).toBe("10");
  });
});
