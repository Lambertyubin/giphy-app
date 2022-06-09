import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import GiphySearchButton, { IGiphySearchButton } from "../GiphySearchButton";

const renderSearchButton = (props: Partial<IGiphySearchButton> = {}) => {
  const defaultProps: IGiphySearchButton = {
    onClick() {
      return;
    },
  };
  return render(<GiphySearchButton {...defaultProps} {...props} />);
};

afterEach(cleanup);

describe("<GiphySearchButton>", () => {
  it("should have 'Go' as text content", async () => {
    const onClick = jest.fn();
    renderSearchButton({ onClick });

    const searchButton = await screen.findByTestId("searchButton");

    expect(searchButton).toBeInTheDocument();
  });

  it("should allow search submission on click", async () => {
    const onClick = jest.fn();
    renderSearchButton({ onClick });

    const buttonElement = await screen.findByTestId("searchButton");
    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalled();
  });
});
