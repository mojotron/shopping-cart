import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart";

const cartItemProp = {
  image: "./image.jpg",
  name: "temp",
  type: "backpack",
  id: 1,
  price: 10,
  quantity: 1,
};

describe("Cart page component", () => {
  test("render heading", () => {
    render(<Cart items={[]} total="" />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement.textContent).toMatch(/your shopping cart/i);
  });

  test("render total amount", () => {
    render(<Cart items={[]} total="13.50" />);
    const paraElement = screen.getByTitle("total-amount");
    expect(paraElement.textContent).toBe("Total: $13.50");
  });

  test("render purchase button", () => {
    render(<Cart items={[]} total="13.50" />);
    const btnElement = screen.getByText(/purchase/i);
    expect(btnElement).toBeInTheDocument();
  });

  test("when cart empty there are no cart item components", () => {
    render(<Cart items={[]} total="" />);
    const cartItemElements = screen.queryAllByRole("img");
    expect(cartItemElements.length).toBe(0);
  });

  test("render cart item components when cart is not empty", () => {
    render(<Cart items={[cartItemProp]} total="" />);
    const cartItemElements = screen.queryAllByRole("img");
    expect(cartItemElements.length).toBe(1);
  });
});
