import { Link } from "react-router-dom";
import "../styles/ItemCard.css";

const ItemCard = (props) => {
  return (
    <Link
      key={props.data.id}
      to={`/shop/${props.data.id}`}
      className="ItemCard__info__link"
    >
      <div className="ItemCard">
        <img
          className="ItemCard__image"
          src={props.data.images.icon}
          alt={props.data.name}
        />
        <div className="ItemCard__info">
          <h3 className="ItemCard__info__name">{props.data.name}</h3>
          <p className="ItemCard__info__type">{props.data.type.value}</p>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
