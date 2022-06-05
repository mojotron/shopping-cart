import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { createMemoryHistory } from "history";

test("opening cart with protected route", async () => {
  window.confirm = jest.fn(() => true);

  const history = createMemoryHistory();
  render(<App location={history.location} navigator={history} />);

  userEvent.click(screen.getByAltText("shopping cart icon"));

  expect(screen.getByTitle("total-amount").textContent).toMatch(/Total:\s\$/i);
});
