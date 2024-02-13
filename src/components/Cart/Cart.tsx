import React, { useMemo } from 'react';
import { useCart } from '../../hooks/useCart';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { cart, toggleCart } = useCart();

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <div className="w-[350px] h-[100vh] bg-emerald-500 z-50 absolute top-0 right-[0] transition duration-400 ease-in-out">
      <button
        type="button"
        onClick={toggleCart}
        className="absolute top-5 right-5"
      >
        x
      </button>

      {cart.map((item) => (
        <CartItem key={item.id} />
      ))}
      <h2>{totalPrice}</h2>
    </div>
  );
};

export default Cart;
