import React from "react";
import ReactDOM from "react-dom/client";
import SearchableGiphyApp from "./SearchableGiphyApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <SearchableGiphyApp />
  </React.StrictMode>
);
