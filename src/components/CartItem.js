import "../styles/CartItem.css";

const CartItem = (props) => {
  return (
    <div className="CartItem">
      <img
        className="CartItem__icon"
        src={props.data.image}
        alt={props.data.name}
      />

      <div className="CartItem__info">
        <h3>{props.data.name}</h3>
        <p title="item-type">{props.data.type}</p>

        <div className="CartItem__quantity">
          <button
            className="btn btn--update-quantity"
            onClick={props.handleDecrementItemQuantity}
            data-id={props.data.id}
          >
            -
          </button>
          <p title="item-quantity">{props.data.quantity}</p>
          <button
            className="btn btn--update-quantity"
            onClick={props.handleIncrementItemQuantity}
            data-id={props.data.id}
          >
            +
          </button>
        </div>
      </div>

      <div className="CartItem__price">
        <p>${props.data.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
