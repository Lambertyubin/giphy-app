import React, { useContext } from "react";
import { Pagination, Stack } from "@mui/material";
import { IContext } from "../interfaces/data.interface";
import GiphyContext from "../../store/context";

const GiphyPaginator: React.FC = () => {
  const { currentPage, totalDataSize, itemsPerPage, handlePageChange } =
    useContext<IContext>(GiphyContext);
  const numberOfPages = Math.ceil(totalDataSize / itemsPerPage);

  const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
    handlePageChange(page);
  };

  return (
    <Stack spacing={2} sx={styles.stack}>
      <Pagination
        count={numberOfPages}
        page={currentPage}
        onChange={handleChange}
        variant="outlined"
        shape="rounded"
        data-testid="paginator"
      />
    </Stack>
  );
};

export default GiphyPaginator;

const styles = {
  stack: {
    display: "flex",
    alignItems: "center",
  },
};
