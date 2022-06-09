import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface ITitleProps {
  appTitle: string;
}

const GiphyAppHeader = (props: ITitleProps) => {
  const { appTitle } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={styles.text}
          data-testid="appTitle"
        >
          {appTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default GiphyAppHeader;

const styles = {
  text: {
    flexGrow: 1,
  },
};
