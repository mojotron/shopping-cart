import React, { useMemo } from 'react';
import { useCart } from '../../hooks/useCart';
import CartItem from '../CartItem/CartItem';
import CartItemList from './CartItemList';
import { CloseButton } from '../../ui/CloseButton/CloseButton';
import Button from '../../ui/Button/Button';

const Cart = () => {
  const { cart, toggleCart } = useCart();

  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  return (
    <div className="fixed px-4 py-16 w-[500px] bg-emerald-400 z-50 top-0 right-0 bottom-0 transition duration-400 ease-in-out shadow-[0_2px_100px_25px_rgba(30,30,30)] flex flex-col justify-between gap-5">
      <CloseButton onClick={toggleCart} />

      <CartItemList>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItemList>

      <section className="bg-emerald-50 rounded-md p-4">
        <h3 className="border-t border-dashed">Subtotal</h3>
        <p className="text-sm">Tax</p>
        <p className="text-sm">Discount</p>
        <h2 className="border-t border-dashed">Total</h2>
        <Button onClick={() => {}}>Proceed to checkout</Button>
        <Button onClick={() => {}}>Continue Shopping</Button>
      </section>
    </div>
  );
};

export default Cart;
