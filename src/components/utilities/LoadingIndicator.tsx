import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LoadingIndicator = () => {
  return (
    <Box sx={styles}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingIndicator;

const styles = {
  display: "flex",
  margin: "5em",
};
