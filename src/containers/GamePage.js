import "./gamepage.css";
// import packages
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

// import components
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import AddCollectionButton from "../components/AddCollectionButton.js";
import AddReviewButton from "../components/AddReviewButton.js";
import ReviewSection from "../components/ReviewSection.js";

const GamePage = (props) => {
  const {
    isFavorite,
    addFav,
    checkFav,
    userId,
    fav,
    token,
    setToken,
    setUserId,
  } = props;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:4000/games?id=${id}`
          `https://express-gamepad.herokuapp.com/games?id=${id}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
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
    <>
      <Header
        fav={fav}
        token={token}
        setToken={setToken}
        setUserId={setUserId}
      />
      <span className="exo fz400 gamepage-txt1">{data.name}</span>
      <div className="gamepage-div2">
        <div className="gamepage-div3">
          <img src={data.background_image} alt={data.name} />
        </div>

        <div className="gamepage-div0 exo fz400">
          {userId && (
            <div className="gamepage-div5">
              <AddCollectionButton
                addFav={addFav}
                data={data}
                isFavorite={isFavorite}
                checkFav={checkFav}
              />
              <AddReviewButton userId={userId} id={id} />
            </div>
          )}

          <div className="gamepage-div4">
            <div className="gamepage-div6 exo fz400">
              <div className="gamepage-div7">
                <span className="gamepage-txt4">Plateforms</span>
                {/* gérer un tableau */}
                {data.platforms.map((value, index) => {
                  return <span key={index}>{value.platform.name}</span>;
                })}
                <span className="gamepage-txt4">Released date</span>
                {/* revoir format date*/}
                <span>{data.released}</span>
                <span className="gamepage-txt4">Publisher</span>
                {/* gérer un tableau */}
                {data.publishers.map((value, index) => {
                  return <span key={index}>{value.name}</span>;
                })}
              </div>
              <div className="gamepage-div7">
                <span className="gamepage-txt4">Genre</span>
                {/* gérer un tableau */}
                {data.genres.map((value, index) => {
                  return <span key={index}>{value.name}</span>;
                })}
                <span className="gamepage-txt4">developer</span>
                {/* gérer un tableau */}
                {data.developers.map((value, index) => {
                  return <span key={index}>{value.name}</span>;
                })}
                <span className="gamepage-txt4">Age rating</span>
                <span>4</span>
              </div>
            </div>

            <span className="gamepage-txt4">About</span>
            <div
              className="gamepage-div8 gamepage-txt3"
              dangerouslySetInnerHTML={{ __html: [data.description_raw] }}
            />
          </div>
        </div>
      </div>
      <ReviewSection id={id} />
      <Footer />
    </>
  );
};
export default GamePage;
