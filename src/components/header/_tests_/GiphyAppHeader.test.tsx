import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import GiphyAppHeader from "../GiphyAppHeader";

afterEach(cleanup);

describe("<GiphyAppHeader>", () => {
  it("renders appbar component", () => {
    const appTitle = "My Title";
    render(<GiphyAppHeader appTitle={appTitle} />);

    const titleElement = screen.getByTestId("appTitle");
    expect(titleElement.textContent).toBe(appTitle);
  });
});
