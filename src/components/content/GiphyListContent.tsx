import React, { useContext } from "react";
import GiphyContext from "../../store/context";
import GiphyGallery from "./GiphyGallery";
import { IContext } from "../interfaces/data.interface";
import LoadingIndicator from "../utilities/LoadingIndicator";

interface GiphyListContentProps {
  handleGiphyClick(giphyID: string): void;
}

const GiphyListContent: React.FC<GiphyListContentProps> = ({
  handleGiphyClick,
}) => {
  const { isLoading } = useContext<IContext>(GiphyContext);
  if (isLoading) {
    return <LoadingIndicator data-testid="loadingIndicator" />;
  }
  return <GiphyGallery handleGiphyClick={handleGiphyClick} />;
};

export default GiphyListContent;
