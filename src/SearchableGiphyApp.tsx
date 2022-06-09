import React from "react";
import GiphyAppContent from "./components/content/GiphyAppContent";
import GiphyAppHeader from "./components/header/GiphyAppHeader";
import config from "./config/config";

function SearchableGiphyApp() {
  return (
    <React.Fragment>
      <GiphyAppHeader appTitle={config.APP_TITLE} />
      <GiphyAppContent />
    </React.Fragment>
  );
}

export default SearchableGiphyApp;
