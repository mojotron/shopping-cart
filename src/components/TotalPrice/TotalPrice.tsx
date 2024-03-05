import { useMemo } from 'react';
import { useCart } from '../../hooks/useCart';

const TotalPrice = () => {
  const { cart } = useCart();
  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);
  const tax = totalPrice * 0.2;
  const subtotal = totalPrice - tax;

  return (
    <div className="w-full mb-2 text-md flex flex-col gap-1">
      <h3 className="pt-1 border-t border-dashed border-gray-400 text-gray-600 flex justify-between items-center">
        <span>Subtotal</span>
        <span>{subtotal.toFixed(2)} €</span>
      </h3>

      <p className="text-xs text-gray-600 flex justify-between items-center">
        <span>Tax</span>
        <span>{tax.toFixed(2)} €</span>
      </p>
      <h2 className="pt-1 border-t border-dashed border-gray-400 font-bold text-gray-800 flex justify-between items-center">
        <span>Total</span>
        <span>{totalPrice.toFixed(2)} €</span>
      </h2>
    </div>
  );
};

export default TotalPrice;
