import { Link } from "react-router-dom";
import cartIcon from "../images/shopping-cart-svgrepo-com.svg";
import "../styles/CartLink.css";

const CartLink = (props) => {
  console.log("length in cart link", props.cartLength);
  return (
    <Link to="/cart" className="CartLink">
      <img src={cartIcon} className="CartLink__icon" />
      {props.cartLength > 0 && (
        <div className="CartLink__counter">{props.cartLength}</div>
      )}
    </Link>
  );
};

export default CartLink;
