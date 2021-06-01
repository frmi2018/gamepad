import { MdTurnedInNot, MdTurnedIn } from "react-icons/md";

const AddCollectionButton = (props) => {
  const { addFav, data, isFavorite, checkFav } = props;
  return (
    <div
      className="gamepage-btn"
      onClick={() => addFav([data.id, data.background_image, data.name])}
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
