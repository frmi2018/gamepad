import { MdTurnedInNot, MdTurnedIn } from "react-icons/md";
// import pour faire des requêtes
import axios from "axios";
import { useEffect } from "react";

const AddCollectionButton = (props) => {
  const { data, isFavorite, setIsFavorite, userId } = props;

  const test = async () => {
    try {
      const request = {
        userId: userId,
        gameId: data.id,
        gameName: data.name,
        gamePictureURL: data.background_image,
      };
      const response = await axios.post(
        // `http://localhost:4000/user/postfavoris`,
        // request
        `https://gamepad-frmi-api.herokuapp.com/user/postfavoris`,
        request
      );
      if (response.data.message === "game added") {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    const test2 = async () => {
      try {
        const response = await axios.get(
          // `http://localhost:4000/user/getfavoris?userId=${userId}&gameId=${data.id}`
          `https://gamepad-frmi-api.herokuapp.com/user/getfavoris?userId=${userId}&gameId=${data.id}`
        );
        if (response.data.exist === true) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      } catch (error) {
        console.log(error.response.data.message);
      }
    };
    test2();
  }, []);

  return (
    <div className="gamepage-btn" onClick={() => test()}>
      <div className="gamepage-btn-div1">
        {isFavorite ? (
          <span>Delete from collection</span>
        ) : (
          <span>Save to Collection</span>
        )}
      </div>
      <div className="gamepage-btn-div2">
        {isFavorite ? <MdTurnedIn /> : <MdTurnedInNot />}
      </div>
    </div>
  );
};
export default AddCollectionButton;
