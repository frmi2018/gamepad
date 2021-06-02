import { BiCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";

const AddReviewButton = ({ userId, id, setUserId, setToken }) => {
  return (
    <Link
      to={{
        pathname: "/Review",
        state: {
          userId: userId,
          id: id,
          setUserId: setUserId,
          setToken: setToken,
        },
      }}
    >
      <div className="gamepage-btn">
        <div className="gamepage-btn-div1">
          <span className="gamepage-txt3">Add a Review</span>
        </div>

        <div className="gamepage-btn-div2">
          <BiCommentDetail />
        </div>
      </div>
    </Link>
  );
};

export default AddReviewButton;
