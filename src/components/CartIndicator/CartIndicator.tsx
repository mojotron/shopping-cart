import { GiPaperBagFolded as IconCart } from 'react-icons/gi';
import { useCart } from '../../hooks/useCart';

const CartIndicator = () => {
  const { cart, toggleCart } = useCart();

  const cartSize = cart.length;

  return (
    <button
      type="button"
      onClick={toggleCart}
      className="group relative border border-emerald-600 rounded-full w-10 h-10 flex justify-center items-center 
    "
    >
      <IconCart size={35} className="text-emerald-600" />
      {cartSize > 0 && (
        <div className="absolute top-7 right-0 rounded-full border border-emerald-600 bg-emerald-200 w-6 h-6 flex justify-center items-center font-bold text-sm text-emerald-600">
          {cartSize}
        </div>
      )}
    </button>
  );
};

export default CartIndicator;
