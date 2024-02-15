import React, { useMemo } from 'react';
import { useCart } from '../../hooks/useCart';
import CartItem from '../CartItem/CartItem';
import CartItemList from './CartItemList';
import { CloseButton } from '../../ui/CloseButton/CloseButton';

const Cart = () => {
  const { cart, toggleCart } = useCart();

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <div className="fixed px-8 py-16 w-[350px] h-[100vh] bg-emerald-400 z-50  top-0 right-[0] transition duration-400 ease-in-out shadow-[0_2px_100px_25px_rgba(30,30,30)]">
      <CloseButton onClick={toggleCart} />

      <CartItemList>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItemList>

      <h2>€{totalPrice}</h2>
    </div>
  );
};

export default Cart;
