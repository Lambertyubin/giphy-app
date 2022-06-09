import React, { useContext, useState } from "react";
import GiphyContext from "../../store/context";
import { IContext } from "../interfaces/data.interface";
import GiphySearchField from "./GiphySearchField";
import GiphySearchButton from "./GiphySearchButton";

const GiphySearchBar = () => {
  const [query, setQuery] = useState("");
  const { handleSearchSubmit } = useContext<IContext>(GiphyContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (query) {
      handleSearchSubmit(query);
      setTimeout(() => setQuery(""), 1000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (query && e.key === "Enter") {
      handleSearchSubmit(query);
      setTimeout(() => setQuery(""), 1000);
    }
  };

  return (
    <div style={styles}>
      <GiphySearchField
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <GiphySearchButton onClick={handleSubmit} />
    </div>
  );
};

export default GiphySearchBar;

const styles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  padding: "2em",
};
