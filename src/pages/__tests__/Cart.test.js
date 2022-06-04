import { render, screen } from "@testing-library/react";
import Cart from "../Cart";
import mockProp from "../../mocks/cartItemPropsData.json";

describe("Cart page component", () => {
  test("render heading", () => {
    render(<Cart items={[]} total="" />);
    expect(screen.getByRole("heading").textContent).toMatch(
      /your shopping cart/i
    );
  });

  test("render total amount", () => {
    render(<Cart items={[]} total="13.50" />);
    expect(screen.getByTitle("total-amount").textContent).toBe("Total: $13.50");
  });

  test("render purchase button", () => {
    render(<Cart items={[]} total="13.50" />);
    expect(screen.getByText(/purchase/i)).toBeInTheDocument();
  });

  test("when cart empty there are no cart item components", () => {
    render(<Cart items={[]} total="" />);
    expect(screen.queryAllByRole("img").length).toBe(0);
  });

  test("render cart item components when cart is not empty", () => {
    render(<Cart items={[mockProp]} total="" />);
    expect(screen.queryAllByRole("img").length).toBe(1);
  });
});
