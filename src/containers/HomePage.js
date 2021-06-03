import "./homepage.css";

// Hook
import { useState } from "react";
// import composants
import Header from "../components/Header.js";
import MainLogo from "../components/MainLogo.js";
import Search from "../components/Search.js";
import MostRecent from "../components/MostRecent.js";
import TopMarks from "../components/TopMarks.js";
import Pagination from "../components/Pagination.js";
import Footer from "../components/Footer.js";
import SearchResult from "../components/SearchResult.js";

const HomePage = (props) => {
  const { token, setToken, setUserId } = props;
  // stat
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [displaySearchResult, setDisplaySearchResult] = useState(false);
  const [search, setSearch] = useState("");
  const [lastPage, setLastPage] = useState("");

  return (
    <div>
      <Header token={token} setToken={setToken} setUserId={setUserId} />
      <MainLogo />
      <Search
        count={count}
        setDisplaySearchResult={setDisplaySearchResult}
        setSearch={setSearch}
      />
      {displaySearchResult === false ? (
        <div className="games-list-container">
          <MostRecent
            currentPage={currentPage}
            setCount={setCount}
            setLastPage={setLastPage}
          />
          <TopMarks
            currentPage={currentPage}
            setCount={setCount}
            setLastPage={setLastPage}
          />
        </div>
      ) : (
        <SearchResult
          setCount={setCount}
          count={count}
          search={search}
          currentPage={currentPage}
          setLastPage={setLastPage}
        />
      )}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        lastPage={lastPage}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
