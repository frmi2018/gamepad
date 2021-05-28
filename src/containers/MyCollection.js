import "./mycollection.css";

import { Link } from "react-router-dom";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Card from "../components/Card.js";

const MyCollection = ({ fav }) => {
  console.log(fav);
  return (
    <>
      <Header />
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
              <Link key={index} to={`/games/${game[0]}`}>
                <Card key={game[0]} className="card-main" image={game[1]} />
              </Link>
            );
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};
export default MyCollection;
