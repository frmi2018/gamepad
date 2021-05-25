import "./mostrecent.css";
// Hook
import { useState, useEffect } from "react";
// import pour faire des requêtes
import axios from "axios";
// import pour afficher un loader le temps du chargement des données
import Loader from "react-loader-spinner";

const MostRecent = (props) => {
  const { setCount, currentPage } = props;
  // state
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // requête serveur pour récupérer les données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/games?page=${currentPage}&ordering=added`
        );
        // console.log(response.data);
        setData(response.data);
        setCount(response.data.count);
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
                <div key={game.id} className="card-main">
                  <img src={game.background_image} alt={game.name} />
                  <span className="gameName exo fz400">{game.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MostRecent;
