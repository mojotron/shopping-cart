import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer component", () => {
  test("render footer snapshot", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  test("should render heading", () => {
    render(<Footer />);
    expect(screen.getByRole("heading").textContent).toMatch(
      /^created by @mojotron$/i
    );
  });

  test("should render link", () => {
    render(<Footer />);
    expect(screen.getByRole("link")).toBeInTheDocument();
  });

  test("link should have rel attribute", () => {
    render(<Footer />);
    expect(screen.getByRole("link").rel).toBe("noopener noreferrer");
  });
});
