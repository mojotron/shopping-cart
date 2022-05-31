import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import ItemCard from "../ItemCard";

const MockItemCard = () => {
  return (
    <BrowserRouter>
      <ItemCard data={propData} />
    </BrowserRouter>
  );
};

const propData = {
  id: 1,
  name: "temp",
  images: { icon: "/temp-path.jpg" },
  type: { value: "backpack" },
};

describe("ItemCard component", () => {
  test("component is link", () => {
    render(<MockItemCard />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveClass("ItemCard__info__link");
  });

  test("renders image", () => {
    render(<MockItemCard />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });

  test("render header with name of item", () => {
    render(<MockItemCard />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement.textContent).toEqual("temp");
  });

  test("paragraph renders item type", () => {
    render(<MockItemCard />);
    const paraElement = screen.getByText("backpack");
    expect(paraElement).toBeInTheDocument();
  });
});
