import React from "react";
import GiphyList from "./GiphyList";
import GiphyPaginator from "./GiphyPaginator";

const GiphyContent: React.FC = (props) => {
  return (
    <div style={styles}>
      <GiphyPaginator />
      <GiphyList />
    </div>
  );
};

export default GiphyContent;

const styles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};
