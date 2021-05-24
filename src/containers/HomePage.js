import "./homepage.css";

// Hook
import { useState, useEffect } from "react";
// import pour faire des requêtes
import axios from "axios";
// import pour afficher un loader le temps du chargement des données
import Loader from "react-loader-spinner";
// import composants
import Header from "../components/Header.js";
import MainLogo from "../components/MainLogo.js";
import Search from "../components/Search.js";
import ReactPaginate from "react-paginate";

const HomePage = () => {
  // state
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);

  // requête serveur pour récupérer les données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/games`);
        console.log(response.data);
        setData(response.data);
        setCount(response.data.count);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // pagination
  const PER_PAGE = 20;
  const pageCount = Math.ceil(count / PER_PAGE);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return isLoading ? (
    <Loader
      className="home-loader"
      type="Grid"
      color="#ee171f"
      height={80}
      width={80}
    />
  ) : (
    <div>
      <Header />
      <MainLogo />
      <Search count={count} />

      <div className="games-list-container">
        <div className="five-games-container">
          <span className="title-section exo fz500">Most Relevance Games</span>
          <div className="container7">
            {data.results.map((game) => {
              return (
                <div key={game.id} className="card-main">
                  <img src={game.background_image} alt={game.name} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="five-games-container">
          <span className="title-section exo fz500">Most Relevance Games</span>
          <div className="container7">
            {data.results.map((game) => {
              return (
                <div key={game.id} className="card-main">
                  <img src={game.background_image} alt={game.name} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="pagination">
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>

        <footer>
          <span className="exo fz500">
            Powered by{" "}
            <a href="https://rawg.io/apidocs" className="exo fz500">
              Rawg API
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
};
export default HomePage;
