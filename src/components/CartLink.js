import { NavLink } from "react-router-dom";
import cartIcon from "../images/shopping-cart-svgrepo-com.svg";
import "../styles/CartLink.css";

const CartLink = (props) => {
  return (
    <NavLink to="/cart" className="CartLink">
      <img src={cartIcon} className="CartLink__icon" alt="shopping cart icon" />
      {props.cartLength > 0 && (
        <div className="CartLink__counter" data-testid="cart-item-counter">
          {props.cartLength}
        </div>
      )}
    </NavLink>
  );
};

export default CartLink;
