import { Typography } from "@mui/material";
import React from "react";

interface IGiphyTitleProps {
  title: string;
}
const GiphyTitle: React.FC<IGiphyTitleProps> = ({ title }) => {
  return (
    <Typography
      sx={styles}
      variant="caption"
      display="block"
      margin={2}
      data-testid="giphyTitle"
    >
      {title}
    </Typography>
  );
};

export default GiphyTitle;

const styles = {
  textAlign: "center",
};
