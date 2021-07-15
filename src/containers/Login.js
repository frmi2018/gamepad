import "./login.css";
import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Howdidworks from "../components/Howdidworks.js";

const Login = ({ setToken, setUserId, token }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(0);
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email && password) {
      setError(0);
      const request = {
        email: email,
        password: password,
      };
      try {
        // const response = await axios.post(
        //   "http://localhost:4000/user/login",
        //   request
        // );
        const response = await axios.post(
          "https://gamepad-frmi-api.herokuapp.com/user/login",
          request
        );
        // console.log(response.data);
        setToken(response.data.token);
        setUserId(response.data._id);
        Cookies.set(
          "user",
          {
            token: response.data.token,
            id: response.data._id,
          },
          { expires: 1 }
        );
        history.push("/");
      } catch (error) {
        console.log(error.response.data.error);
        if (error.response.data.error === "Unauthorized") {
          setError(2);
        } else if (error.response.data.error === "User not found") {
          setError(3);
        } else {
          setError(0);
        }
      }
    } else {
      setError(1);
    }
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  return (
    <>
      <Header token={token} setToken={setToken} setUserId={setUserId} />
      <div className="login-div0">
        <div className="login-div1">
          {/* colonne gauche */}
          <Howdidworks />
          {/* colonne droite */}
          <div className="login-div3">
            <div className="login-title">
              <span className="login-txt1 exo fz500">Login</span>
            </div>
            {/* formulaire */}
            <form onSubmit={handleSubmit}>
              <div className="login-div5">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div className="login-div5">
                <input
                  type="password"
                  placeholder="Password..."
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>

              <input
                className="rectangle36 exo fz500"
                type="submit"
                value="Connexion"
              />
              {error === 1 ? (
                <p className="error">
                  Merci de remplir tous les champs du formulaire
                </p>
              ) : error === 2 ? (
                <p className="error">Accès non autorisé</p>
              ) : error === 3 ? (
                <p className="error">Accès non autorisé</p>
              ) : null}
              <Link to={`/signup`}>
                <span className="signup-txt3 exo fz500">
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
