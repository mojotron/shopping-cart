import { render, screen } from "@testing-library/react";
import "whatwg-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";
import shopMock from "../../mocks/shopData.json";
import Shop from "../Shop";

console.log(shopMock);

const server = setupServer(
  rest.get(`https://fortnite-api.com/v2/cosmetics/br/new`, (req, res, ctx) => {
    return res(ctx.json(shopMock));
  })
);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Shop page component", () => {
  test("should render product items", async () => {
    render(<Shop />);
    const linkElements = await screen.findAllByRole("link");
    expect(linkElements.length).toBe(3);
  });
  // test("render product items on resolved request", async () => {});
  // test("render error on rejected request", async () => {});
});
