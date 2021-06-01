import "./review.css";

import Header from "../components/Header.js";

const Review = () => {
  return (
    <>
      <Header />
      <div className="review-div1">
        <div className="review-div2">
          <span className="review-txt1">Write a Review</span>
          <span className="close-button">X</span>
        </div>
        <form action="" className="review-div3">
          <span>Review title</span>
          <input type="text" label="Review title" className="review-div4" />
          <span>Review text</span>
          <input type="area" label="Review text" className="review-div5" />
          <button className="publish exo fz500">Publish</button>
        </form>
      </div>
    </>
  );
};
export default Review;
