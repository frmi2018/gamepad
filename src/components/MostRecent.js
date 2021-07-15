import "./fivegames.css";
// -----
import { useState, useEffect } from "react";
// import pour faire des requêtes
import axios from "axios";
import { Link } from "react-router-dom";
// import pour afficher un loader le temps du chargement des données
import Loader from "react-loader-spinner";
// components
import Card from "./Card.js";

const MostRecent = (props) => {
  const { setCount, currentPage, setLastPage } = props;
  // state
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // requête serveur pour récupérer les données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:4000/games?pagesize=5&page=${currentPage}&ordering=added`
          `https://gamepad-frmi-api.herokuapp.com/games?pagesize=5&page=${currentPage}&ordering=added`
        );
        // console.log(response.data);
        setData(response.data);
        setCount(response.data.count);
        setLastPage(Math.ceil(response.data.count / 5));
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchData();
  }, [currentPage]);

  return isLoading ? (
    <Loader
      className="home-loader"
      type="Grid"
      color="#ee171f"
      height={80}
      width={80}
    />
  ) : (
    <div className="five-games-div0">
      <span className="five-games-txt exo fz500">Most Relevance Games</span>
      <div className="five-games-div1">
        {data.results.map((game) => {
          return (
            <Link key={game.id} to={`/games/${game.id}`}>
              <Card
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
export default MostRecent;
