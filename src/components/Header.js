import "./header.css";
// -----
import logo from "../assets/logo.svg";
// -----
import { Link } from "react-router-dom";

const Header = ({ fav, myCollection, setMyCollection }) => {
  return (
    <>
      <div className="header">
        <div className="headerleft">
          <div className="logo-container">
            <img src={logo} alt="logo gamepad" />
          </div>
          <span className="gamepad exo fw400">Gamepad</span>
        </div>
        <div className="headerright">
          {myCollection ? (
            <Link
              to={`/MyCollection`}
              fav={fav}
              setMyCollection={setMyCollection}
            >
              <span className="mycollection exo fw500">My Collection</span>
            </Link>
          ) : (
            <Link to={`/`}>
              <span className="mycollection exo fw500">Back</span>
            </Link>
          )}
          <div className="button-login">
            <span className="login exo fw500">Login</span>
          </div>
        </div>
      </div>
      <div className="line1" />
    </>
  );
};

export default Header;
