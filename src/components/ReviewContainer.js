const ReviewContainer = ({ game }) => {
  console.log(game);
  return (
    <div className="sr-div2">
      <span>{game.title}</span>
      <span>{game.text}</span>
      <div>avatar</div>
      <span>{game.date}</span>
      <span>{game.author}</span>
      <div>pouce</div>
      <span>+4</span>
    </div>
  );
};
export default ReviewContainer;
