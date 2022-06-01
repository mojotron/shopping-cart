import { render, screen } from "@testing-library/react";
import Shop from "../Shop";

// mock fetch only with jest
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () =>
//       Promise.resolve([
//         {
//           id: 1,
//           name: "temp1",
//           images: { icon: "/temp-path1.jpg" },
//           type: { value: "backpack" },
//         },
//         {
//           id: 2,
//           name: "temp2",
//           images: { icon: "/temp-path2.jpg" },
//           type: { value: "backpack" },
//         },
//         {
//           id: 3,
//           name: "temp3",
//           images: { icon: "/temp-pat3.jpg" },
//           type: { value: "backpack" },
//         },
//       ]),
//   })
// );

describe("Shop page component", () => {
  // beforeEach(() => {
  //   fetch.mockClear();
  // });

  test("render spinner while waiting request", async () => {
    // render(<Shop />);
  });
  test("render product items on resolved request", async () => {
    // render(<Shop />);
    // const itemElements = await screen.findAllByRole("link");
    // expect(itemElements.length).toBeGreaterThan(0);
  });
  test("render error on rejected request", async () => {});
});
