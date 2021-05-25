import "./pagination.css";

const Pagination = (props) => {
  const { count, pageSize, currentPage, setCurrentPage } = props;
  const lastPage = Number((count / pageSize).toFixed(0));

  return (
    <div className="pagination">
      {currentPage !== 1 && (
        <>
          <span onClick={() => setCurrentPage(currentPage - 1)}>&#9664;</span>
          <span onClick={() => setCurrentPage(1)}>1</span>
          <span>...</span>
        </>
      )}
      <span className="currentPage">{currentPage}</span>
      {currentPage < lastPage && (
        <>
          <span>...</span>
          <span onClick={() => setCurrentPage(lastPage)}>{lastPage}</span>
          <span onClick={() => setCurrentPage(currentPage + 1)}>&#9654;</span>
        </>
      )}
    </div>
  );
};

export default Pagination;
