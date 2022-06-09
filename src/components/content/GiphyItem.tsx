import { ImageListItem } from "@mui/material";
import React from "react";
import GiphyTitle from "./GiphyTitle";
import { IData } from "../interfaces/data.interface";

export interface IGiphyItemProps {
  data: IData;
  onGiphyClick(giphyID: string): void;
}

const GiphyItem: React.FC<IGiphyItemProps> = ({ data, onGiphyClick }) => {
  return (
    <ImageListItem>
      <img
        src={data.images.fixed_height_still.url}
        height={data.images.fixed_height_still.height}
        width="100%"
        alt={data.title}
        loading="lazy"
        onClick={() => onGiphyClick(data.id)}
        aria-label="giphyItem"
      />
      <GiphyTitle title={data.title} />
    </ImageListItem>
  );
};

export default GiphyItem;
