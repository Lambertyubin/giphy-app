import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import GiphyAppContent from "../GiphyAppContent";

afterEach(cleanup);

const renderGiphyAppContent = () => {
  return render(<GiphyAppContent />);
};

describe("<GiphyAppContent>", () => {
  it("should display the paginator and search elements", async () => {
    renderGiphyAppContent();

    const searchElement = await screen.findByLabelText("Search");
    const paginator = await screen.findByTestId("paginator");

    expect(searchElement).toBeInTheDocument();
    expect(paginator).toBeInTheDocument();
  });

  it("should display 15 images on current page", async () => {
    const NUMBER_OF_GIFS_PER_PAGE = 15;
    renderGiphyAppContent();

    const images = await screen.findAllByLabelText("giphyItem");

    expect(images.length).toBe(NUMBER_OF_GIFS_PER_PAGE);
  });
});
