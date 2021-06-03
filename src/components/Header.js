import "./header.css";
// -----
import logo from "../assets/logo.svg";
// -----
import { Link, useLocation } from "react-router-dom";
import Profil from "./Profil.js";

const Header = ({ token, setToken, setUserId, userId, setIsFavorite }) => {
  const location = useLocation();
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
          {token === undefined ? (
            location.pathname !== "/Login" && (
              <Link to={`/Login`}>
                <div className="button-pink">
                  <span className="button-pink-txt exo fw500">Login</span>
                </div>
              </Link>
            )
          ) : location.pathname !== "/MyCollection" ? (
            <>
              <Link
                to={{
                  pathname: `/MyCollection`,
                  state: { userId: userId, setIsFavorite: setIsFavorite },
                }}
              >
                <span className="mycollection exo fw500">My collection</span>
              </Link>
              <Profil setUserId={setUserId} setToken={setToken} />
            </>
          ) : (
            <Profil setUserId={setUserId} setToken={setToken} />
          )}
        </div>
      </div>
      <div className="line-top-pink" />
    </>
  );
};

export default Header;
