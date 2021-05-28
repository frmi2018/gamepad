import "./login.css";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { MdTurnedIn } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Header />
      <div className="login-div0">
        <div className="login-div1">
          <div className="login-div2">
            <div className="login-title">
              <span className="login-txt1 exo fz500">
                How it works ?
                <div className="login-line" />
              </span>
            </div>
            <div className="login-div4">
              <div className="login-logos"></div>
              <span className="login-txt2 exo fz500">
                Log in to your free account to be able to get all features of
                Gamepad
              </span>
            </div>
            <div className="login-div4">
              <div className="login-logos"></div>
              <span className="login-txt2 exo fz500">
                Add a game to your collection
              </span>
            </div>
            <div className="login-div4">
              <div className="login-logos"></div>
              <span className="login-txt2 exo fz500">
                Leave a review for a game
              </span>
            </div>
          </div>
          <div className="login-div3">
            <div className="login-title">
              <span className="login-txt1 exo fz500">Login</span>
            </div>
            <form action="submit">
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Email..."
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
                />
              </div>
              <div className="search-container">
                <input
                  type="password"
                  placeholder="Password..."
                  onChange={(event) => {
                    console.log(event.target.value);
                  }}
                />
              </div>
              <div className="button-login">
                <span className="login exo fw500">Connexion</span>
              </div>
              <Link to={`/SignUp`}>
                <span className="login-txt3 exo fz500">
                  Don't have an account yet ?
                </span>
              </Link>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Login;
