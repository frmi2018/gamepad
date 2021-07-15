import "./reviewsection.css";
// -----
import { useState, useEffect } from "react";
// import pour faire des requêtes
import axios from "axios";
// import pour afficher un loader le temps du chargement des données
import Loader from "react-loader-spinner";
// components
import ReviewContainer from "./ReviewContainer.js";

const ReviewSection = ({ id }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // requête serveur pour récupérer les données
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:4000/user/getreview?id=${id}`
          `https://gamepad-frmi-api.herokuapp.com/user/getreview?id=${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <Loader
      className="home-loader"
      type="Grid"
      color="#ee171f"
      height={80}
      width={80}
    />
  ) : (
    <div className="review-section-div0">
      <div className="review-section-div1">
        <span className="reviews exo fz400">Reviews</span>
        <span className="nb-review exo fz400">{data.review.length}</span>
      </div>
      {data.review.length > 0 ? (
        <>
          <span className="review-section-txt1 exo">Most relevant review</span>
          {data.review.map((review, index) => {
            return <ReviewContainer key={index} review={review} />;
          })}
        </>
      ) : (
        <span className="review-section-txt2 exo">
          No review for this game !
        </span>
      )}
    </div>
  );
};
export default ReviewSection;
