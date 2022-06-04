import { render, screen } from "@testing-library/react";
import "whatwg-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";
import shopMock from "../../mocks/mockShopData.json";
import Shop from "../Shop";
import { BrowserRouter } from "react-router-dom";

const MockShop = () => {
  return (
    <BrowserRouter>
      <Shop />
    </BrowserRouter>
  );
};

const server = setupServer(
  rest.get(`https://fortnite-api.com/v2/cosmetics/br/new`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(shopMock));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Shop page component", () => {
  test("should render loading spinner while data is loading", () => {
    render(<MockShop />);
    expect(screen.getByAltText("loading spinner")).toHaveClass(
      "LoadingSpinner__spinner"
    );
  });
  test("should render product items", async () => {
    render(<MockShop />);
    const linkElements = await screen.findAllByRole("link");
    expect(linkElements.length).toBe(3);
  });
  test("handle fetch error", async () => {
    server.use(
      rest.get(
        "https://fortnite-api.com/v2/cosmetics/br/new",
        (req, res, ctx) => {
          return res(ctx.status(400), ctx.json({ message: "Woops!" }));
        }
      )
    );
    render(<MockShop />);
    const errorElement = await screen.findByRole("heading");
    expect(errorElement).toHaveClass("error");
  });
});
