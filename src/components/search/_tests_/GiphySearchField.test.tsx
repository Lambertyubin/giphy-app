import React, { ChangeEvent, KeyboardEvent } from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import GiphySearchField, { IGiphySearchField } from "../GiphySearchField";

afterEach(cleanup);

const renderSearchForm = (props: Partial<IGiphySearchField> = {}) => {
  const defaultProps: IGiphySearchField = {
    value: "",
    onChange() {
      return;
    },
    onKeyDown() {
      return;
    },
  };
  return render(<GiphySearchField {...defaultProps} {...props} />);
};

describe("<GiphySearchField>", () => {
  it("should have 'Search' as placeholder", async () => {
    render(
      <GiphySearchField
        value={""}
        onChange={function (event: ChangeEvent<HTMLInputElement>): void {}}
        onKeyDown={function (event: KeyboardEvent<HTMLDivElement>): void {}}
      />
    );
    const searchElement = await screen.findByLabelText("Search");

    expect(searchElement).toBeInTheDocument();
  });

  it("should allow entering of search text", async () => {
    const onChange = jest.fn();
    renderSearchForm({ onChange });
    const searchElement = await screen.findByLabelText("Search");

    fireEvent.change(searchElement, { target: { value: "test" } });

    expect(onChange).toHaveBeenCalled();
  });

  it("should allow search submission with button", async () => {
    const onKeyDown = jest.fn();
    renderSearchForm({ onKeyDown });
    const searchElement = await screen.findByLabelText("Search");

    fireEvent.keyDown(searchElement);

    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });
});
