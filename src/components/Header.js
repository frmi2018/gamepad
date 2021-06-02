import "./header.css";
// -----
import logo from "../assets/logo.svg";
// -----
import { Link, useLocation } from "react-router-dom";

const Header = ({ fav, token }) => {
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
            <Link to={`/Login`}>
              <div className="button-login">
                <span className="login exo fw500">Login</span>
              </div>
            </Link>
          ) : location.pathname !== "/MyCollection" ? (
            <>
              <Link to={{ pathname: `/MyCollection`, state: { fav: fav } }}>
                <span className="mycollection exo fw500">My collection</span>
              </Link>
              <div className="button-login">
                <span className="login exo fw500">Profil</span>
              </div>
            </>
          ) : (
            <div className="button-login">
              <span className="login exo fw500">Profil</span>
            </div>
          )}
        </div>
      </div>
      <div className="line-top-pink" />
    </>
  );
};

export default Header;
