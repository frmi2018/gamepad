import "./card.css";

const Card = (props) => {
  const { image, title } = props;
  return (
    <div className="card-container">
      <img src={image} alt={title} />
      <span className="exo fz400">{title}</span>
    </div>
  );
};

export default Card;
