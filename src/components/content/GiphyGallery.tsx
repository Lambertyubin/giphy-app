import { ImageList } from "@mui/material";
import React, { useContext } from "react";
import GiphyContext from "../../store/context";
import GiphyItem from "./GiphyItem";
import { IContext } from "../interfaces/data.interface";

interface GiphyGalleryProps {
  handleGiphyClick(giphyID: string): void;
}
const GiphyGallery: React.FC<GiphyGalleryProps> = ({ handleGiphyClick }) => {
  const { data } = useContext<IContext>(GiphyContext);

  const renderGiphyItems = () => {
    return data.map((item) => (
      <GiphyItem key={item.id} data={item} onGiphyClick={handleGiphyClick} />
    ));
  };

  return (
    <ImageList sx={styles.image} variant="woven" cols={3} gap={8}>
      {renderGiphyItems()}
    </ImageList>
  );
};

export default GiphyGallery;

const styles = {
  image: {
    width: "80%",
  },
};
