import { render, screen } from "@testing-library/react";
import "whatwg-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";
import productMock from "../../mocks/mockProductData.json";
import Product from "../Product";
import { BrowserRouter } from "react-router-dom";

const MockProduct = () => {
  return (
    <BrowserRouter>
      <Product />
    </BrowserRouter>
  );
};

const server = setupServer(
  rest.get(
    `https://fortnite-api.com/v2/cosmetics/br/:itemId`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(productMock));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Product page component", () => {
  test("should render loading spinner while data is loading", () => {
    render(<MockProduct />);
    expect(screen.getByAltText("loading spinner")).toHaveClass(
      "LoadingSpinner__spinner"
    );
  });

  test("should render product", async () => {
    render(<MockProduct />);
    const linkElements = await screen.findByRole("article");
    expect(linkElements).toBeInTheDocument();
  });

  test("handle fetch error", async () => {
    server.use(
      rest.get(
        "https://fortnite-api.com/v2/cosmetics/br/:itemId",
        (req, res, ctx) => {
          return res(ctx.status(400), ctx.json({ message: "Woops!" }));
        }
      )
    );
    render(<MockProduct />);
    const errorElement = await screen.findByRole("heading");
    expect(errorElement).toHaveClass("error");
  });

  test("add button", async () => {
    render(<MockProduct />);
    const addBtn = await screen.findByRole("button");
    expect(addBtn.textContent).toBe("Add to cart");
  });
});
