import "./mostrecent.css";
// Hook
import { useState, useEffect } from "react";
// import pour faire des requêtes
import axios from "axios";
import { Link } from "react-router-dom";
// import pour afficher un loader le temps du chargement des données
import Loader from "react-loader-spinner";
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
          `https://express-gamepad.herokuapp.com/games?pagesize=5&page=${currentPage}&ordering=added`
        );
        // console.log(response.data);
        setData(response.data);
        setCount(response.data.count);
        setLastPage(Math.ceil(response.data.count / 5));
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
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
    <div>
      <div className="games-list-container">
        <div className="five-games-container">
          <span className="title-section exo fz500">Most Relevance Games</span>
          <div className="container7">
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
      </div>
    </div>
  );
};
export default MostRecent;
