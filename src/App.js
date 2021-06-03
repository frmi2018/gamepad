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
  let cookie2 = Cookies.getJSON("user");
  const [token, setToken] = useState((cookie2 && cookie2.token) || undefined);
  const [userId, setUserId] = useState((cookie2 && cookie2.id) || undefined);

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
              />
            </Route>
            <Route path="/mycollection">
              <MyCollection
                token={token}
                setToken={setToken}
                setUserId={setUserId}
                userId={userId}
                setIsFavorite={setIsFavorite}
              />
            </Route>
            <Route path="/login">
              <Login token={token} setToken={setToken} setUserId={setUserId} />
            </Route>
            <Route path="/review">
              <Review token={token} setToken={setToken} setUserId={setUserId} />
            </Route>
            <Route path="/signup">
              <SignUp token={token} setToken={setToken} setUserId={setUserId} />
            </Route>
            <Route path="/">
              <HomePage
                token={token}
                setToken={setToken}
                setUserId={setUserId}
                userId={userId}
              />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
