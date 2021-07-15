import "./review.css";

import { useState } from "react";
import axios from "axios";
import { Link, useHistory, useLocation } from "react-router-dom";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const Review = ({ token, setToken, setUserId }) => {
  let data = useLocation();
  let id = data.state.id;
  let userId = data.state.userId;
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState(0);
  let history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (id && userId && title && text) {
      setError(0);
      if (title !== "") {
        setError(0);
        if (text !== "") {
          setError(0);
          const request = {
            gameId: id,
            title: title,
            text: text,
            author: userId,
          };
          try {
            await axios.post(
              "https://gamepad-frmi-api.herokuapp.com/user/postreview",
              request
            );
            // console.log(response.data);
            history.push(`/games/${id}`);
          } catch (error) {
            console.log(error.response.data.error);
          }
        } else {
          // manque commentaire
          setError(3);
        }
      } else {
        // manque titre
        setError(2);
      }
    } else {
      // manque un paramètre
      setError(1);
    }
  };

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const handleTextChange = (event) => {
    const value = event.target.value;
    setText(value);
  };

  return (
    <>
      <Header token={token} setToken={setToken} setUserId={setUserId} />
      <div className="review-div0">
        <div className="review-div1">
          <div className="review-div2 exo fz500">
            <span className="review-txt1">Write a Review</span>
            <Link to={`/games/${id}`}>
              <span className="close-button">X</span>
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="review-div3">
            <span className="review-txt2">Review title</span>
            <input
              type="text"
              value={title}
              onChange={handleTitleChange}
              className="review-div4"
            />
            <span className="review-txt2">Review text</span>
            <input
              type="area"
              value={text}
              onChange={handleTextChange}
              className="review-div5"
            />
            <input
              className="publish exo fz500"
              type="submit"
              value="Publish"
            />
          </form>
          {error > 0 &&
            (error === 1 ? (
              <p className="error">
                Merci de remplir tous les champs du formulaire
              </p>
            ) : error === 2 ? (
              <p className="error">Il manque un titre</p>
            ) : error === 3 ? (
              <p className="error">Il manque un texte</p>
            ) : null)}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Review;
