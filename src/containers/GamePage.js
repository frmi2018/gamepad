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
  const { isFavorite, userId, token, setToken, setUserId, setIsFavorite } =
    props;
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:4000/games?id=${id}`
          `https://gamepad-frmi-api.herokuapp.com/games?id=${id}`
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
    <>
      <Header token={token} setToken={setToken} setUserId={setUserId} />
      <span className="exo fz400 gamepage-txt1">{data.name}</span>
      <div className="gamepage-div2">
        <div className="gamepage-div3">
          <img src={data.background_image} alt={data.name} />
        </div>

        <div className="gamepage-div0 exo fz400">
          {userId && (
            <div className="gamepage-div5">
              <AddCollectionButton
                data={data}
                isFavorite={isFavorite}
                setIsFavorite={setIsFavorite}
                userId={userId}
              />
              <AddReviewButton userId={userId} id={id} />
            </div>
          )}

          <div className="gamepage-div4">
            <div className="gamepage-div6 exo fz400">
              <div className="gamepage-div7">
                <span className="gamepage-txt4">Plateforms</span>
                {/* gérer un tableau */}
                {data.platforms.forEach((value, index) => {
                  if (index < 3) {
                    if (index < 2 && index !== data.platforms.length - 1) {
                      return <span key={index}>{value.platform.name},</span>;
                    } else if (
                      index < 2 &&
                      index === data.platforms.length - 1
                    ) {
                      return <span key={index}>{value.platform.name}</span>;
                    } else {
                      return <span key={index}>{value.platform.name}...</span>;
                    }
                  }
                })}
                <span className="gamepage-txt4">Released date</span>
                {/* revoir format date*/}
                <span>{data.released}</span>
                <span className="gamepage-txt4">Publisher</span>
                {/* gérer un tableau */}
                {data.publishers.forEach((value, index) => {
                  if (index < 3) {
                    if (index < 2 && index !== data.publishers.length - 1) {
                      return <span key={index}>{value.name},</span>;
                    } else if (
                      index < 2 &&
                      index === data.publishers.length - 1
                    ) {
                      return <span key={index}>{value.name}</span>;
                    } else {
                      return <span key={index}>{value.name}...</span>;
                    }
                  }
                })}
              </div>
              <div className="gamepage-div7">
                <span className="gamepage-txt4">Genre</span>
                {/* gérer un tableau */}
                {data.genres.forEach((value, index) => {
                  if (index < 3) {
                    if (index < 2 && index !== data.genres.length - 1) {
                      return <span key={index}>{value.name},</span>;
                    } else if (index < 2 && index === data.genres.length - 1) {
                      return <span key={index}>{value.name}</span>;
                    } else {
                      return <span key={index}>{value.name}...</span>;
                    }
                  }
                })}

                <span className="gamepage-txt4">developer</span>
                {/* gérer un tableau */}
                {data.developers.forEach((value, index) => {
                  if (index < 3) {
                    if (index < 2 && index !== data.developers.length - 1) {
                      return <span key={index}>{value.name},</span>;
                    } else if (
                      index < 2 &&
                      index === data.developers.length - 1
                    ) {
                      return <span key={index}>{value.name}</span>;
                    } else {
                      return <span key={index}>{value.name}...</span>;
                    }
                  }
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
