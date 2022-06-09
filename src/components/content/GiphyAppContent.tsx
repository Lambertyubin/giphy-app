import React, { useState, useMemo } from "react";
import axios from "axios";
import GiphyContent from "./GiphyContent";
import GiphySearchBar from "../search/GiphySearchBar";
import GiphyContext from "../../store/context";
import { useDataAPI } from "../../hooks/useDataAPI";
import { IContext } from "../interfaces/data.interface";
import config from "../../config/config";
import GiphyErrorIndicator from "../utilities/GiphyErrorIndicator";

const GiphyAppContent = () => {
  const {
    data,
    isLoading,
    isError,
    updateErrorState,
    updateLoadingState,
    updateDataState,
  } = useDataAPI(config.DEFAULT_GIFS_URL);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const itemsPerPage: number = config.NUMBER_OF_GIFS_PER_PAGE;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const totalDataSize = data.length;

  const dataForCurrentPage = useMemo(
    () => data.slice(indexOfFirstItem, indexOfLastItem),
    [indexOfFirstItem, indexOfLastItem, data]
  );

  const handleSearchSubmit = async (query: string) => {
    const params = {
      api_key: config.API_KEY,
      q: query,
      limit: config.GIFS_QUERY_LIMIT,
    };
    updateErrorState(false);
    updateLoadingState(true);
    try {
      const results = await axios(config.SEARCH_GIFS_URL, {
        params,
      });
      updateDataState(results.data.data);
    } catch (error) {
      updateErrorState(true);
      setTimeout(() => updateErrorState(false), 5000);
    }
    updateLoadingState(false);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const contextData: IContext = {
    data: dataForCurrentPage,
    allData: data,
    isLoading,
    isError,
    currentPage,
    itemsPerPage,
    totalDataSize,
    handlePageChange,
    handleSearchSubmit,
  };

  return (
    <GiphyContext.Provider value={contextData}>
      <GiphyErrorIndicator />
      <GiphySearchBar />
      <GiphyContent />
    </GiphyContext.Provider>
  );
};

export default GiphyAppContent;
