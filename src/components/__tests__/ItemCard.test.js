import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ItemCard from "../ItemCard";
import propsMock from "../../mocks/itemCardPropsData.json";

const MockItemCard = () => {
  return (
    <BrowserRouter>
      <ItemCard data={propsMock} />
    </BrowserRouter>
  );
};

describe("ItemCard component", () => {
  test("render ItemCard snapshot", () => {
    const { container } = render(<MockItemCard />);
    expect(container).toMatchSnapshot();
  });

  test("component is link", () => {
    render(<MockItemCard />);
    expect(screen.getByRole("link")).toHaveClass("ItemCard__info__link");
  });

  test("renders image", () => {
    render(<MockItemCard />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  test("render header with name of item", () => {
    render(<MockItemCard />);
    expect(screen.getByRole("heading").textContent).toEqual("temp");
  });

  test("paragraph renders item type", () => {
    render(<MockItemCard />);
    expect(screen.getByText("backpack")).toBeInTheDocument();
  });
});
