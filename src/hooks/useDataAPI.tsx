import React, { useState, useEffect } from "react";
import axios from "axios";
import { IData } from "../components/interfaces/data.interface";
import config from "../config/config";

export const useDataAPI = (apiUrl: string) => {
  const [data, setData] = useState<IData[]>([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const params = {
      api_key: config.API_KEY,
      limit: config.GIFS_QUERY_LIMIT,
    };
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const results = await axios(apiUrl, { params });
        setData(results.data.data);
      } catch (error) {
        setIsError(true);
        setTimeout(() => setIsError(false), 5000);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [apiUrl]);

  const updateErrorState = (status: boolean): void => {
    setIsError(status);
  };

  const updateLoadingState = (status: boolean): void => {
    setIsLoading(status);
  };

  const updateDataState = (data: IData[]): void => {
    setData(data);
  };

  return {
    data,
    isError,
    isLoading,
    updateErrorState,
    updateLoadingState,
    updateDataState,
  };
};
