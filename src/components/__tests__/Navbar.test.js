import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";

const MockNavbar = (props) => {
  return (
    <BrowserRouter>
      <Navbar cartLength={props.cartLength} />
    </BrowserRouter>
  );
};

describe("Navbar", () => {
  test("renders correct amount of links", () => {
    render(<MockNavbar cartLength={1} />);
    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toBe(3);
  });

  test("renders correct amount of page links", () => {
    render(<MockNavbar cartLength={1} />);
    const linkElements = screen.getAllByTestId("navbar-link-page");
    expect(linkElements.length).toBe(2);
  });

  test("renders one shopping cart link", () => {
    render(<MockNavbar cartLength={1} />);
    const linkElements = screen.getAllByTestId("cart-item-counter");
    expect(linkElements.length).toBe(1);
  });

  test("add active class to clicked link", () => {
    render(<MockNavbar cartLength={1} />);
    const homeLink = screen.getByText(/home/i);
    fireEvent.click(homeLink);
    expect(homeLink.className).toBe("Navbar__item active");
  });
});
