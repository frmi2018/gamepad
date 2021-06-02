import "./mycollection.css";

import { Link } from "react-router-dom";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Card from "../components/Card.js";
import { MdTurnedIn } from "react-icons/md";

const MyCollection = ({ fav, removeFav, token, setToken, setUserId }) => {
  return (
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
          {fav.map((game, index) => {
            return (
              <div key={index} className="mycollection-div2">
                <Link to={`/games/${game[0]}`}>
                  <Card
                    key={game[0]}
                    className="card-main"
                    image={game[1]}
                    title={game[2]}
                  />
                </Link>

                <MdTurnedIn
                  className="turnedin-pink"
                  title={"Click to remove this game from your collection"}
                  onClick={() => removeFav(game[0])}
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
