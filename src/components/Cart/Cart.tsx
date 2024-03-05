// hooks
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import CartItem from '../CartItem/CartItem';
import CartItemList from './CartItemList';
import CloseButton from '../../ui/CloseButton/CloseButton';
import Button from '../../ui/Button/Button';
import TotalPrice from '../TotalPrice/TotalPrice';

const Cart = () => {
  const { cart, toggleCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="fixed px-4 pt-10 pb-5 w-[95%] sm:w-[500px] bg-green-400 z-50 top-0 right-0 bottom-0 transition duration-400 ease-in-out shadow-[0_2px_100px_25px_rgba(30,30,30)] flex flex-col justify-between gap-5">
      <CloseButton onClick={toggleCart} />

      <CartItemList>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItemList>

      <section className="bg-gray-50 rounded-md p-4">
        <TotalPrice />
        <div className="flex flex-col gap-1">
          {cart.length > 0 && (
            <Button
              onClick={() => {
                toggleCart();
                navigate('/checkout');
              }}
            >
              Proceed to checkout
            </Button>
          )}
          <Button
            onClick={() => {
              toggleCart();
              navigate('/store');
            }}
          >
            Continue Shopping
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Cart;
