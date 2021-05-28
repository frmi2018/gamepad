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
  const [myCollection, setMyCollection] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  let cookie = Cookies.get("fav");
  const [fav, setFav] = useState((cookie && JSON.parse(cookie)) || []);

  // FAVORIS ADD/REMOVE
  const addFav = (tab) => {
    let favCopy = [...fav];
    console.log(tab[0]);
    console.log(tab[1]);
    console.log(favCopy.length);
    let check = false;
    for (let i; i < favCopy.length; i++) {
      if (favCopy[i][0] === tab[0]) {
        favCopy.splice(favCopy[i], 1);
        alert("Favoris enlevé !");
        setIsFavorite(false);
        check = true;
      }
    }
    if (check === false) {
      favCopy.push(tab);
      alert("Favoris ajouté !");
      setIsFavorite(true);
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
              <GamePage
                fav={fav}
                isFavorite={isFavorite}
                addFav={addFav}
                myCollection={myCollection}
                setMyCollection={setMyCollection}
              />
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
