import "./mycollection.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Card from "../components/Card.js";
import { MdTurnedIn } from "react-icons/md";
import axios from "axios";
import Loader from "react-loader-spinner";

const MyCollection = ({ token, setToken, setUserId, userId }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const removeFav = async (game) => {
    try {
      const request = {
        userId: userId,
        gameId: game.gameId,
        gameName: game.gameName,
        gamePictureURL: game.gamePictureURL,
      };
      const response = await axios.post(
        // `http://localhost:4000/user/postfavoris`,request
        `https://gamepad-frmi-api.herokuapp.com/user/postfavoris`,
        request
      );
      // console.log(response.data);
      window.location.reload(false);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:4000/user/getfavoris?userId=${userId}`
          `https://gamepad-frmi-api.herokuapp.com/user/getfavoris?userId=${userId}`
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data.message);
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
    <>
      <Header token={token} setToken={setToken} setUserId={setUserId} />
      <div className="mycollection-div0">
        <div className="mycollection-title">
          <span className="mycollection-txt1 exo fz400">
            My Collection
            <div className="mycollection-line" />
          </span>
        </div>

        <div className="mycollection-div1">
          {data.listfav.map((game, index) => {
            return (
              <div key={index} className="mycollection-div2">
                <Link to={`/games/${game.gameId}`}>
                  <Card
                    key={game.gameId}
                    className="card-main"
                    image={game.gamePictureURL}
                    title={game.gameName}
                  />
                </Link>

                <MdTurnedIn
                  className="turnedin-pink"
                  title={"Click to remove this game from your collection"}
                  onClick={() => removeFav(game)}
                />
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};
export default MyCollection;
