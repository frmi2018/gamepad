import "./reviewcontainer.css";
import up from "../assets/up.svg";
import down from "../assets/down.svg";

const ReviewContainer = ({ review }) => {
  return (
    <div className="rc-div1 exo fz400">
      <span className="rc-txt-xl undeline">{review.title}</span>
      <p className="rc-txt-m">{review.text}</p>
      <div className="rc-div7">
        <div className="rc-div4">
          <div className="rc-div2"></div>
          <div className="rc-div5">
            <span className="rc-txt-xs">{review.date}</span>
            <span className="rc-txt-l">{review.author}</span>
          </div>
        </div>
        <div className="rc-div6 rc-txt-xl">
          <img className="rc-div8 rc-green" src={up} alt="pouce vers le haut" />
          <span>+4</span>
          <img className="rc-div8 rc-pink" src={down} alt="pouce vers le bas" />
          <span>-2</span>
        </div>
      </div>
    </div>
  );
};
export default ReviewContainer;
