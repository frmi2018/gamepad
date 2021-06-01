import "./review.css";

import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import Header from "../components/Header.js";

const Review = (props) => {
  const { userId, id } = props;
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
          console.log(request);
          try {
            const response = await axios.post(
              "https://express-gamepad.herokuapp.com/user/postreview",
              request
            );
            console.log(response.data);
            history.push("/");
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
      <Header />
      <div className="review-div1">
        <div className="review-div2">
          <span className="review-txt1">
            {userId} Write a Review for {id}
          </span>
          <Link to={`/games/${id}`}>
            <span className="close-button">X</span>
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="review-div3">
          <span>Review title</span>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className="review-div4"
          />
          <span>Review text</span>
          <input
            type="area"
            value={text}
            onChange={handleTextChange}
            className="review-div5"
          />
          <input className="publish exo fz500" type="submit" value="Publish" />

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
        </form>
      </div>
    </>
  );
};
export default Review;
