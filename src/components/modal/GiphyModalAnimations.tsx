import React from "react";
import { ImageList, ImageListItem } from "@mui/material";
import { IModalImageData } from "../interfaces/data.interface";

export interface IGiphyAnimationProps {
  data: IModalImageData;
}

const GiphyModalAnimations: React.FC<IGiphyAnimationProps> = ({ data }) => {
  const renderImageList = () => {
    return data.urls.map((item) => (
      <ImageListItem key={item.url} sx={{ height: "200", width: "200" }}>
        {item.url ? (
          <img
            src={item.url}
            alt=""
            loading="lazy"
            width="100%"
            height="100%"
          />
        ) : (
          <video width="100%" height="100%" preload="none" controls>
            <source src={item.mp4} type="video/mp4" />
          </video>
        )}
      </ImageListItem>
    ));
  };

  return (
    <div style={styles}>
      <ImageList sx={stylesImage} variant="woven" cols={2} gap={8}>
        {renderImageList()}
      </ImageList>
    </div>
  );
};

export default GiphyModalAnimations;

const styles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};

const stylesImage = {
  width: "90%",
};
