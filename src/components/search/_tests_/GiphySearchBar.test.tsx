import { render, screen, cleanup } from "@testing-library/react";
import GiphySearchBar from "../GiphySearchBar";

const renderSearchBar = () => {
  return render(<GiphySearchBar />);
};

afterEach(cleanup);

describe("<GiphySearchBar>", () => {
  it("should have render <GiphySearchField> and <GiphySearchButton>", async () => {
    renderSearchBar();
    const searchButton = await screen.findByTestId("searchButton");
    const searchElement = await screen.findByLabelText("Search");

    expect(searchButton).toBeInTheDocument();
    expect(searchElement).toBeInTheDocument();
  });
});
