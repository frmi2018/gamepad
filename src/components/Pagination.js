import "./pagination.css";

const Pagination = (props) => {
  const { currentPage, setCurrentPage, lastPage } = props;

  return (
    <div className="pagination">
      <div className="nav-page-container">
        <div className="before">
          {currentPage !== 1 && (
            <div>
              <span onClick={() => setCurrentPage(currentPage - 1)}>
                &#9664;
              </span>
              <span onClick={() => setCurrentPage(1)}>1</span>
            </div>
          )}

          {currentPage - 100 > 1 && (
            <div>
              <span>...</span>
              <span onClick={() => setCurrentPage(currentPage - 100)}>
                {currentPage - 100}
              </span>
            </div>
          )}
        </div>

        <span className="currentPage">{currentPage}</span>

        <div className="after">
          {currentPage + 100 < lastPage && (
            <div>
              <span onClick={() => setCurrentPage(currentPage + 100)}>
                {currentPage + 100}
              </span>
              <span>...</span>
            </div>
          )}

          {currentPage !== lastPage && (
            <div>
              <span onClick={() => setCurrentPage(lastPage)}>{lastPage}</span>
              <span onClick={() => setCurrentPage(currentPage + 1)}>
                &#9654;
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
