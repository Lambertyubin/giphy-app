import { TextField } from "@mui/material";
import React from "react";

export interface IGiphySearchField {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLDivElement>;
}

const GiphySearchField: React.FC<IGiphySearchField> = (props) => {
  const { value, onChange, onKeyDown } = props;
  return (
    <TextField
      label="Search"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default GiphySearchField;
