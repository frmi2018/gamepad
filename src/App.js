import "./App.css";
// -----
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
// import containers
import HomePage from "./containers/HomePage.js";
import GamePage from "./containers/GamePage.js";
import MyCollection from "./containers/MyCollection.js";
import Login from "./containers/Login.js";
import SignUp from "./containers/SignUp.js";
import Review from "./containers/Review.js";

const App = () => {
  const [myCollection, setMyCollection] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  let cookie = Cookies.get("fav");
  const [fav, setFav] = useState((cookie && JSON.parse(cookie)) || []);
  let cookie2 = Cookies.getJSON("user");
  const [token, setToken] = useState(cookie2.token || undefined);
  const [userId, setUserId] = useState(cookie2.id || undefined);
  const [error, setError] = useState(0);

  // FAVORIS ADD/REMOVE
  const addFav = (tab) => {
    let favCopy = [...fav];
    let check = false;
    for (let i = 0; i < favCopy.length; i++) {
      if (favCopy[i][0] === tab[0]) {
        favCopy.splice(i, 1);
        setIsFavorite(false);
        check = true;
      }
    }
    if (check === false) {
      favCopy.push(tab);
      setIsFavorite(true);
    }
    setFav(favCopy);
    Cookies.set("fav", favCopy, { expires: 1 });
  };

  // FAVORIS REMOVE
  const removeFav = (id) => {
    let favCopy = [...fav];
    for (let i = 0; i < favCopy.length; i++) {
      if (favCopy[i][0] === id) {
        favCopy.splice(i, 1);
        setIsFavorite(false);
      }
    }
    setFav(favCopy);
    Cookies.set("fav", favCopy, { expires: 1 });
  };

  // FAVORIS CHECK
  const checkFav = (id) => {
    let favCopy = [...fav];
    let check = false;
    for (let i = 0; i < favCopy.length; i++) {
      if (favCopy[i][0] === id) {
        check = true;
      }
    }
    if (check === true) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route path="/games/:id">
              <GamePage
                fav={fav}
                isFavorite={isFavorite}
                addFav={addFav}
                myCollection={myCollection}
                setMyCollection={setMyCollection}
                checkFav={checkFav}
                userId={userId}
              />
            </Route>
            <Route path="/mycollection">
              <MyCollection fav={fav} removeFav={removeFav} />
            </Route>
            <Route path="/login">
              <Login
                setToken={setToken}
                setUserId={setUserId}
                error={error}
                setError={setError}
              />
            </Route>
            <Route path="/review">
              <Review userId={userId} />
            </Route>
            <Route path="/signup">
              <SignUp
                setToken={setToken}
                setUserId={setUserId}
                error={error}
                setError={setError}
              />
            </Route>
            <Route path="/">
              <HomePage fav={fav} token={token} />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
