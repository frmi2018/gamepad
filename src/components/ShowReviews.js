import "./showreviews.css";
// -----
import { useState, useEffect } from "react";
// import pour faire des requêtes
import axios from "axios";
// import pour afficher un loader le temps du chargement des données
import Loader from "react-loader-spinner";
// components
import ReviewContainer from "./ReviewContainer.js";

const ShowReviews = ({ id }) => {
  console.log(id);
  // state
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // requête serveur pour récupérer les données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = {
          gameId: id,
        };
        // const response = await axios.get(
        //   `http://localhost:4000/user/getreview`,
        //   request
        // );
        const response = await axios.get(
          `https://express-gamepad.herokuapp.com/user/getreview`,
          request
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loader
      className="home-loader"
      type="Grid"
      color="#ee171f"
      height={80}
      width={80}
    />
  ) : (
    <div className="sr-div0">
      <div className="sr-div1">
        <span className="reviews exo fz400">Reviews</span>
        <span className="nb-review exo fz400">{data.review.length}</span>
      </div>
      {data.review.length > 0 ? (
        <>
          <span className="sr-txt1 exo">Most relevant review</span>
          {data.review.map((game, index) => {
            return <ReviewContainer key={index} game={game} />;
          })}
        </>
      ) : (
        <span className="sr-txt2 exo">No review for this game !</span>
      )}
    </div>
  );
};
export default ShowReviews;
