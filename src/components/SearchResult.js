import "./searchresult.css";
// Hook
import { useState, useEffect } from "react";
// import pour faire des requêtes
import axios from "axios";
// import pour afficher un loader le temps du chargement des données
import Loader from "react-loader-spinner";
import Card from "./Card.js";

const SearchResult = (props) => {
  const { setCount, count, search, currentPage, setLastPage } = props;
  // state
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // requête serveur pour récupérer les données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:4000/games?pagesize=20&page=${currentPage}&search=${search}`
          `https://express-gamepad.herokuapp.com/games?pagesize=20&page=${currentPage}&search=${search}`
        );
        // console.log(response.data);
        setData(response.data);
        setCount(response.data.count);
        setLastPage((response.data.count / 20).toFixed(0));
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
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
      <div className="rect1">
        <div>
          <span className="txt exo fz500">Search result for "</span>
          <span className="txt italic exo fz400">{search}</span>
          <span className="txt exo fz500"> "</span>
        </div>
        <span className="txt2 exo fz500">{count} games</span>
      </div>
      <div className="result-search-list">
        {data.results.map((game) => {
          return (
            <Card
              key={game.id}
              className="card-main"
              image={game.background_image}
              title={game.name}
            />
          );
        })}
      </div>
    </div>
  );
};
export default SearchResult;
