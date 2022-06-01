import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer component", () => {
  test("should render heading", () => {
    render(<Footer />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement.textContent).toMatch(/^created by @mojotron$/i);
  });

  test("should render link", () => {
    render(<Footer />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
  });

  test("link should have rel attribute", () => {
    render(<Footer />);
    const linkElement = screen.getByRole("link");
    expect(linkElement.rel).toBe("noopener noreferrer");
  });
});
