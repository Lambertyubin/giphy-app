import React, { useContext, useState } from "react";
import GiphyContext from "../../store/context";
import {
  IContext,
  IImageUrl,
  IModalImageData,
} from "../interfaces/data.interface";
import GiphyListContent from "./GiphyListContent";
import GiphyListModal from "../modal/GiphyListModal";

const GiphyList: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState<IModalImageData>({
    urls: [],
    title: "",
  });
  const { allData } = useContext<IContext>(GiphyContext);

  const handleGiphyClick = (giphyID: string) => {
    const selectedGiphy = allData.find((giphy) => giphy.id === giphyID);
    if (selectedGiphy) {
      const giphyTitle = selectedGiphy.title;
      const giphyUrls: IImageUrl[] = Object.values(selectedGiphy.images);
      const giphyRenditions: IModalImageData = {
        urls: giphyUrls,
        title: giphyTitle,
      };
      setModalData(giphyRenditions);
      setOpenModal(true);
    }
  };

  return (
    <div style={styles}>
      <GiphyListContent handleGiphyClick={handleGiphyClick} />
      <GiphyListModal
        openModal={openModal}
        modalData={modalData}
        setOpenModal={setOpenModal}
      />
    </div>
  );
};

export default GiphyList;

const styles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};
