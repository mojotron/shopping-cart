import "../styles/CartItem.css";

const CartItem = (props) => {
  return (
    <div className="CartItem">
      <img className="CartItem__icon" src={props.data.image} alt="" />
      <div className="CartItem__info">
        <h3>{props.data.name}</h3>
        <p>{props.data.type}</p>

        <div className="CartItem__quantity">
          <button
            onClick={props.handleDecrementItemQuantity}
            data-id={props.data.id}
          >
            -
          </button>
          <p>{props.data.quantity}</p>
          <button
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
