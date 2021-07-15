import "./searchresult.css";
// Hook
import { useState, useEffect } from "react";
// import pour faire des requêtes
import axios from "axios";
import { Link } from "react-router-dom";
// import pour afficher un loader le temps du chargement des données
import Loader from "react-loader-spinner";
import Card from "./Card.js";

const SearchResult = (props) => {
  const { setCount, search, currentPage, setLastPage } = props;
  // state
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [plateform, setPlateform] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("");
  // requête serveur pour récupérer les données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:4000/games?pagesize=20&page=${currentPage}&search=${search}`
          `https://gamepad-frmi-api.herokuapp.com/games?pagesize=20&page=${currentPage}&search=${search}`
        );
        // console.log(response.data);
        setData(response.data);
        setCount(response.data.count);
        setLastPage(Math.ceil(response.data.count / 20));
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchData();
  }, [search, currentPage]);

  return isLoading ? (
    <Loader
      className="home-loader"
      type="Grid"
      color="#ee171f"
      height={80}
      width={80}
    />
  ) : (
    <div className="games-list-container">
      <div className="searchresult-div1">
        <div className="searchresult-div2">
          <span className="txt exo fz500">Search result for "</span>
          <span className="txt italic exo fz400">{search}</span>
          <span className="txt exo fz500"> "</span>
        </div>
      </div>

      {/* ------------------- */}
      <div className="filters-container">
        {/* Select plateform */}
        <div>
          <label htmlFor="plateform-select">Plateform</label>
          <select
            name="plateform"
            id="plateform-select"
            onChange={(event) => {
              setPlateform(event.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        {/* Select type */}
        <div>
          <label htmlFor="type-select">Type</label>
          <select
            name="type"
            id="type-select"
            onChange={(event) => {
              setType(event.target.value);
            }}
          >
            <option value="all">All</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        {/* Select sort */}
        <div>
          <label htmlFor="sort-select">Sort by</label>
          <select
            name="sort"
            id="sort-select"
            onChange={(event) => {
              setSort(event.target.value);
            }}
          >
            <option value="default">Default</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
        <div>
          <span>Go Filters !</span>
        </div>
      </div>
      {/* ------------------- */}
      <div className="result-search-list">
        {data.results.map((game) => {
          return (
            <Link key={game.id} to={`/games/${game.id}`}>
              <Card
                key={game.id}
                className="card-main"
                image={game.background_image}
                title={game.name}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default SearchResult;
