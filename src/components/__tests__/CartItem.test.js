import { render, screen } from "@testing-library/react";
import CartItem from "../CartItem";
import "@testing-library/jest-dom";
import propsMock from "../../mocks/cartItemPropsData.json";

describe("CartItem component", () => {
  test("render CartItem snapshot with mock", () => {
    const { container } = render(<CartItem data={propsMock} />);
    expect(container).toMatchSnapshot();
  });

  test("renders item image", () => {
    render(<CartItem data={propsMock} />);
    expect(screen.getByRole("img").src).toBe("http://localhost/image.jpg");
  });

  test("renders item name", () => {
    render(<CartItem data={propsMock} />);
    expect(screen.getByRole("heading").textContent).toBe("temp");
  });

  test("renders item price", () => {
    render(<CartItem data={propsMock} />);
    expect(screen.getByTitle("item-type").textContent).toBe("backpack");
  });

  test("renders item quantity", () => {
    render(<CartItem data={propsMock} />);
    expect(screen.getByTitle("item-quantity").textContent).toBe("2");
  });
});
