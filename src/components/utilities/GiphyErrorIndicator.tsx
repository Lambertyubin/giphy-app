import { Alert } from "@mui/material";
import React, { useContext } from "react";
import GiphyContext from "../../store/context";
import { IContext } from "../interfaces/data.interface";

const GiphyListError: React.FC = () => {
  const { isError } = useContext<IContext>(GiphyContext);
  if (isError) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Alert severity="error">
          Unable to get gifs, please try again later
        </Alert>
      </div>
    );
  }
  return null;
};

export default GiphyListError;
