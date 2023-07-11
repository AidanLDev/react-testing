import { render, screen } from "@testing-library/react";

import Async from "./Async";

describe("Async component", () => {
  test("Renders post if request succeeds", async () => {
    // Overwrite built in fetch with jest.fn()
    window.fetch = jest.fn();
    // Use mockResolvedValueOnce() to mock fetch data
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });
    render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
