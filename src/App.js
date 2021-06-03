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
  const [isFavorite, setIsFavorite] = useState(false);
  let cookie = Cookies.get("fav");
  const [fav, setFav] = useState((cookie && JSON.parse(cookie)) || []);
  let cookie2 = Cookies.getJSON("user");
  const [token, setToken] = useState((cookie2 && cookie2.token) || undefined);
  const [userId, setUserId] = useState((cookie2 && cookie2.id) || undefined);
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route path="/games/:id">
              <GamePage
                token={token}
                setToken={setToken}
                setUserId={setUserId}
                userId={userId}
                isFavorite={isFavorite}
                setIsFavorite={setIsFavorite}
                fav={fav}
                setFav={setFav}
              />
            </Route>
            <Route path="/mycollection">
              <MyCollection
                fav={fav}
                token={token}
                setToken={setToken}
                setUserId={setUserId}
              />
            </Route>
            <Route path="/login">
              <Login token={token} setToken={setToken} setUserId={setUserId} />
            </Route>
            <Route path="/review">
              <Review token={token} setToken={setToken} setUserId={setUserId} />
            </Route>
            <Route path="/signup">
              <SignUp setToken={setToken} setUserId={setUserId} token={token} />
            </Route>
            <Route path="/">
              <HomePage
                token={token}
                setToken={setToken}
                setUserId={setUserId}
                fav={fav}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
