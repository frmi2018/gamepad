import "./gamepage.css";
// import packages
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import { BiCommentDetail } from "react-icons/bi";
import { MdTurnedInNot, MdTurnedIn } from "react-icons/md";

// import components
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const GamePage = (props) => {
  const { isFavorite, addFav, checkFav } = props;
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
        // console.log(response.data);
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
    <div>
      <Header />
      <span className="exo fz400 gamepage-txt1">{data.name}</span>
      <div className="gamepage-div2">
        <div className="gamepage-div3">
          <img src={data.background_image} alt={data.name} />
        </div>
        <div className="gamepage-div0 exo fz400">
          <div className="gamepage-div5">
            <div
              className="gamepage-btn"
              onClick={() => addFav([data.id, data.background_image])}
            >
              <div className="gamepage-btn-div1">
                {isFavorite ? (
                  <span>Remove to collection</span>
                ) : (
                  <span>Save to Collection</span>
                )}
              </div>
              <div className="gamepage-btn-div2">
                {checkFav(data.id)}
                {isFavorite ? <MdTurnedIn /> : <MdTurnedInNot />}
              </div>
            </div>
            <div className="gamepage-btn exo fz400">
              <div className="gamepage-btn-div1">
                <span className="gamepage-txt3">Add a Review</span>
              </div>

              <div className="gamepage-btn-div2">
                <BiCommentDetail />
              </div>
            </div>
          </div>

          <div className="gamepage-div4">
            <div className="gamepage-div6 exo fz400">
              <div className="gamepage-div7">
                <span className="gamepage-txt4">Plateforms</span>
                {/* gérer un tableau */}
                <span>Nitendo 3DS</span>
                <span className="gamepage-txt4">Released date</span>
                {/* revoir format date*/}
                <span>{data.released}</span>
                <span className="gamepage-txt4">Publisher</span>
                {/* gérer un tableau */}
                {/* <span>{data.publishers[0]}</span> */}
              </div>
              <div className="gamepage-div7">
                <span className="gamepage-txt4">Genre</span>
                {/* gérer un tableau */}
                {/* <span>{data.genres[0]}</span> */}
                <span className="gamepage-txt4">developer</span>
                {/* gérer un tableau */}
                {/* <span>{data.developers[0]}</span> */}
                <span className="gamepage-txt4">Age rating</span>
                {/* gérer un tableau */}
                {/* <span>{data.publishers[0].rating}</span> */}
              </div>
            </div>

            <span className="gamepage-txt4">About</span>
            <div
              className="gamepage-div8 gamepage-txt3"
              dangerouslySetInnerHTML={{ __html: [data.description] }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default GamePage;
