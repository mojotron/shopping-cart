import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    expect(screen.getAllByRole("link").length).toBe(3);
  });

  test("renders correct amount of page links", () => {
    render(<MockNavbar cartLength={1} />);
    const listElement = screen.getByRole("list");
    expect(within(listElement).getAllByRole("link").length).toBe(2);
  });

  test("renders one shopping cart link", () => {
    render(<MockNavbar cartLength={1} />);
    expect(screen.getByAltText("shopping cart icon")).toBeInTheDocument();
  });

  test("add active class to clicked link", () => {
    render(<MockNavbar cartLength={1} />);
    const homeLink = screen.getByText(/home/i);
    userEvent.click(homeLink);
    expect(homeLink.className).toBe("Navbar__item active");
  });
});
