import { Button } from "@mui/material";
import React from "react";

export interface IGiphySearchButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const GiphySearchButton: React.FC<IGiphySearchButton> = (props) => {
  const { onClick } = props;
  return (
    <Button onClick={onClick} variant="contained" data-testid="searchButton">
      Go
    </Button>
  );
};

export default GiphySearchButton;
