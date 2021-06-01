import "./header.css";
// -----
import logo from "../assets/logo.svg";
// -----
import { Link } from "react-router-dom";

const Header = ({ fav, token, isMyCollectionPage, setIsMyCollectionPage }) => {
  return (
    <>
      <div className="header">
        <Link to={`/`}>
          <div className="header-div1">
            <div className="header-logo-container">
              <img src={logo} alt="logo gamepad" />
            </div>
            <span className="gamepad exo fw400">Gamepad</span>
          </div>
        </Link>
        <div className="header-div2">
          {isMyCollectionPage === false && (
            <Link
              to={`/MyCollection`}
              fav={fav}
              setIsMyCollectionPage={setIsMyCollectionPage}
            >
              <span className="mycollection exo fw500">My Collection</span>
            </Link>
          )}
          {token === "" ? (
            <Link to={`/Login`}>
              <div className="button-login">
                <span className="login exo fw500">Login</span>
              </div>
            </Link>
          ) : (
            <div className="button-login">
              <span className="login exo fw500">Logout</span>
            </div>
          )}
        </div>
      </div>
      <div className="line-top-pink" />
    </>
  );
};

export default Header;
