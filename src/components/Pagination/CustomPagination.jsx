import Pagination from "@material-ui/lab/Pagination";

export const CustomPagination = ({ setPage,  numOfPages = 5 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Pagination
          color="primary"
          hideNextButton
          hidePrevButton
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
        />
      </div>
    </>
  );
};
