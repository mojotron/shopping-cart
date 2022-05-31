import { render, screen } from "@testing-library/react";
import CartItem from "../CartItem";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const propsData = {
  image: "./image.jpg",
  name: "temp",
  type: "backpack",
  id: 1,
  price: 10,
  quantity: 2,
};

describe("CartItem component", () => {
  test("renders item image", () => {
    render(<CartItem data={propsData} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement.src).toBe("http://localhost/image.jpg");
  });
  test("renders item name", () => {
    render(<CartItem data={propsData} />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement.textContent).toBe("temp");
  });
  test("renders item price", () => {
    render(<CartItem data={propsData} />);
    const paragraphElement = screen.getByTitle("item-type");
    expect(paragraphElement.textContent).toBe("backpack");
  });
  test("renders item quantity", () => {
    render(<CartItem data={propsData} />);
    const paragraphElement = screen.getByTitle("item-quantity");
    expect(paragraphElement.textContent).toBe("2");
  });
  // TODO test buttons with integration test from App
});
