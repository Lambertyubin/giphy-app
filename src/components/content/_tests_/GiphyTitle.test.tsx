import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import GiphyTitle from "../GiphyTitle";

afterEach(cleanup);

describe("<GiphyAppHeader>", () => {
  it("renders appbar component", () => {
    const giphyTitle = "My Giphy Title";
    render(<GiphyTitle title={giphyTitle} />);

    const giphyTitleElement = screen.getByTestId("giphyTitle");
    expect(giphyTitleElement.textContent).toBe(giphyTitle);
  });
});
