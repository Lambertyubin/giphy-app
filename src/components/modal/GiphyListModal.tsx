import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { IModalImageData } from "../interfaces/data.interface";
import GiphyModalAnimations from "./GiphyModalAnimations";

export interface IGiphyModelProps {
  openModal: boolean;
  modalData: IModalImageData;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const GiphyModal: React.FC<IGiphyModelProps> = (props) => {
  const { openModal, setOpenModal, modalData } = props;
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <Modal open={openModal} onClose={handleClose}>
        <Box sx={styles}>
          <Typography variant="h6" component="h2">
            {modalData.title}
          </Typography>
          <GiphyModalAnimations data={modalData} />
        </Box>
      </Modal>
    </div>
  );
};

export default GiphyModal;

const styles = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  textAlign: "center",
  overflow: "scroll",
  bgcolor: "#333",
  color: "white",
  border: "2px solid #333",
  boxShadow: 24,
  p: 4,
};
