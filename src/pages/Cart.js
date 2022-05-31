import CartItem from "../components/CartItem";
import "../styles/Cart.css";

const Cart = (props) => {
  return (
    <div className="Cart">
      <h2 className="Cart__headings">Your Shopping Cart</h2>
      {props.items.map((item) => (
        <CartItem
          key={item.id}
          data={item}
          handleIncrementItemQuantity={props.handleIncrementItemQuantity}
          handleDecrementItemQuantity={props.handleDecrementItemQuantity}
        />
      ))}

      <p title="total-amount" className="Cart__total">
        Total: ${props.total}
      </p>
      <button className="btn">Purchase</button>
    </div>
  );
};

export default Cart;
