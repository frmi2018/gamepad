import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const MyCollection = ({ fav }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.post(
  //       // "http://localhost:4000/mycollection",
  //       // boucle sur le tableau fav / requete id / sauvegarde image url dans new tab / reponse new tab
  //       {
  //         fav,
  //       }
  //     );
  //     setData(response.data);
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, [fav]);

  return isLoading ? (
    <Loader />
  ) : (
    <div style={{ color: "white" }}>
      <Header />
      <span>My Collection</span>
      <br />
      <span>afficher image des jeux</span>
      <br />
      <span>feat : supprimer jeu des favoris</span>
      <Footer />
    </div>
  );
};
export default MyCollection;
