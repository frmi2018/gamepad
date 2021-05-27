import "./App.css";
// -----
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
// import containers
import HomePage from "./containers/HomePage.js";
import GamePage from "./containers/GamePage.js";
import MyCollection from "./containers/MyCollection.js";

const App = () => {
  let cookie = Cookies.get("fav");
  const [fav, setFav] = useState((cookie && JSON.parse(cookie)) || []);

  // FAVORIS ADD/REMOVE
  const addFav = (id) => {
    let favCopy = [...fav];
    if (favCopy.indexOf(id) === -1) {
      favCopy.push(id);
      alert("Favoris ajouté !");
    } else {
      favCopy.splice(favCopy.indexOf(id), 1);
      alert("Favoris enlevé !");
    }
    setFav(favCopy);
    console.log(favCopy);
    Cookies.set("fav", favCopy);
  };

  return (
    <div className="App">
      <div className="container">
        <Router>
          <Switch>
            <Route path="/games/:id">
              <GamePage addFav={addFav} fav={fav} />
            </Route>
            <Route path="/mycollection">
              <MyCollection />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
