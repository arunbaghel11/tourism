import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card({ id, image, info, price, name, removeTour }) {
  const [readmore, setReadMore] = useState(false);
  const [liked, setLiked] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}....`;

  function toggleLike() {
    setLiked(!liked);
    showToast(liked ? `You unliked ${name}` : `You liked ${name}`);
  }

  function showToast(message) {
    toast.info(message);
  }

  function toggleReadMore() {
    setReadMore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image" alt={name}></img>
      <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-prices">{price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={toggleReadMore}>
            {readmore ? `show less` : `show more`}
          </span>
        </div>
        <button className="btn-like" onClick={toggleLike}>
          {liked ? "Unlike" : "Like"}
        </button>
        <button className="btn-red" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default Card;
