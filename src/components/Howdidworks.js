import "./howdidworks.css";

const Howdidworks = () => {
  return (
    <div className="hdw-div2">
      <div className="hdw-title">
        <span className="hdw-txt1 exo fz500">
          How it works ?
          <div className="hdw-line" />
        </span>
      </div>
      <div className="hdw-div7">
        <div className="hdw-div4">
          <div className="hdw-logos"></div>
          <span className="hdw-txt2 exo fz500">
            Log in to your free account to be able to get all features of
            Gamepad
          </span>
        </div>
        <div className="hdw-div4">
          <div className="hdw-logos"></div>
          <span className="hdw-txt2 exo fz500">
            Add a game to your collection
          </span>
        </div>
        <div className="hdw-div4">
          <div className="hdw-logos"></div>
          <span className="hdw-txt2 exo fz500">Leave a review for a game</span>
        </div>
      </div>
    </div>
  );
};

export default Howdidworks;
