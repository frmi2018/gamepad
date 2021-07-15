import "./signup.css";

import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import Howdidworks from "../components/Howdidworks.js";

const SignUp = ({ setToken, setUserId, token }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(0);
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username && email && password && confirmPassword) {
      setError(0);
      if (password === confirmPassword) {
        setError(0);
        const request = {
          username: username,
          email: email,
          password: password,
        };
        try {
          const response = await axios.post(
            "https://gamepad-frmi-api.herokuapp.com/user/signup",
            request
          );
          // console.log(response.data);
          setToken(response.data.token);
          setUserId(response.data._id);
          history.push("/");
        } catch (error) {
          console.log(error.response.data.error);
          if (error.response.data.error === "This email is already used") {
            setError(3);
          } else if (
            error.response.data.error === "This username is already used"
          ) {
            setError(4);
          }
        }
      } else {
        setError(2);
      }
    } else {
      setError(1);
    }
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  return (
    <>
      <Header token={token} setToken={setToken} setUserId={setUserId} />
      <div className="signup-div0">
        <div className="signup-div1">
          {/* colonne gauche */}
          <Howdidworks />
          {/* colonne droite */}
          <div className="signup-div3">
            <div className="signup-title">
              <span className="signup-txt1 exo fz500">Sign up</span>
            </div>
            {/* formulaire */}
            <form onSubmit={handleSubmit}>
              <div className="signup-div5">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="signup-div5">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div className="signup-div5">
                <input
                  type="password"
                  placeholder="Password..."
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="signup-div5">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
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
                <p className="error">
                  Vos deux mots de passe ne sont pas identiques
                </p>
              ) : error === 3 ? (
                <p className="error">Cet email est déjà utilisé</p>
              ) : error === 4 ? (
                <p className="error">
                  Ce nom d'utilisateur n'est pas disponible
                </p>
              ) : null}
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default SignUp;
