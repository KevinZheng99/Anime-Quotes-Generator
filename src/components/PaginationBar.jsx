import Pagination from "@mui/material/Pagination";

function PaginationBar({ onChange }) {
  return (
    <Pagination
      count={10}
      variant="outlined"
      shape="rounded"
      onChange={onChange}
    />
  );
}

export default PaginationBar;
