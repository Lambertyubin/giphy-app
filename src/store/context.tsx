import { createContext } from "react";
import { IContext } from "../components/interfaces/data.interface";

const initialContext = {
  data: [],
  allData: [],
  isError: false,
  isLoading: false,
  currentPage: 1,
  itemsPerPage: 15,
  totalDataSize: 0,
  handleSearchSubmit: (query: string) => {},
  handlePageChange: (page: number) => {},
};

const GiphyContext = createContext<IContext>(initialContext);

export default GiphyContext;
