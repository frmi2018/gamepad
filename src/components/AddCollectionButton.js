import { MdTurnedInNot, MdTurnedIn } from "react-icons/md";
import Cookies from "js-cookie";

const AddCollectionButton = (props) => {
  const { data, isFavorite, fav, setIsFavorite, setFav } = props;

  // const test = () => {
  //   console.log("test");
  // };

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
    <div
      className="gamepage-btn"
      onClick={() => addFav([data.id, data.background_image, data.name])}
      // onClick={() => test()}
    >
      <div className="gamepage-btn-div1">
        {isFavorite ? (
          <span>Delete from collection</span>
        ) : (
          <span>Save to Collection</span>
        )}
      </div>
      <div className="gamepage-btn-div2">
        {checkFav(data.id)}
        {isFavorite ? <MdTurnedIn /> : <MdTurnedInNot />}
      </div>
    </div>
  );
};
export default AddCollectionButton;
