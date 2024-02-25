import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import { useCart } from '../../hooks/useCart';
import CartItem from '../CartItem/CartItem';
import CartItemList from './CartItemList';
import { CloseButton } from '../../ui/CloseButton/CloseButton';
import Button from '../../ui/Button/Button';

const Cart = () => {
  const { cart, toggleCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);
  const tax = totalPrice * 0.2;
  const subtotal = totalPrice - tax;

  return (
    <div className="fixed px-4 pt-10 pb-5 w-[500px] bg-emerald-400 z-50 top-0 right-0 bottom-0 transition duration-400 ease-in-out shadow-[0_2px_100px_25px_rgba(30,30,30)] flex flex-col justify-between gap-5">
      <CloseButton onClick={toggleCart} />

      <CartItemList>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItemList>

      <section className="bg-emerald-50 rounded-md p-4">
        <div className="mb-2 text-md flex flex-col gap-1">
          <h3 className="border-t border-dashed text-neutral-700 flex justify-between items-center">
            <span>Subtotal</span>
            <span>{subtotal.toFixed(2)} €</span>
          </h3>

          <p className="text-xs text-neutral-600 flex justify-between items-center">
            <span>Tax</span>
            <span>{tax.toFixed(2)} €</span>
          </p>
          <h2 className="border-t border-dashed font-bold text-neutral-800 flex justify-between items-center">
            <span>Total</span>
            <span>{totalPrice.toFixed(2)} €</span>
          </h2>
        </div>
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
