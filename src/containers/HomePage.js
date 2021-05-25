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

const HomePage = () => {
  // stat
  const [count, setCount] = useState(0);
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <Header />
      <MainLogo />
      <Search count={count} />
      <MostRecent currentPage={currentPage} setCount={setCount} />
      <TopMarks currentPage={currentPage} setCount={setCount} />
      <Pagination
        count={count}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
