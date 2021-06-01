import { BiCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const AddReviewButton = ({ id }) => {
  return (
    <Link to={`/Review`} id={id}>
      <div className="gamepage-btn">
        <div className="gamepage-btn-div1">
          <span className="gamepage-txt3">Add a Review {id}</span>
        </div>

        <div className="gamepage-btn-div2">
          <BiCommentDetail />
        </div>
      </div>
    </Link>
  );
};

export default AddReviewButton;
