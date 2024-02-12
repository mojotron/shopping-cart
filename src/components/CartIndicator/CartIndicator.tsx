import { MdShoppingCart as IconCart } from 'react-icons/md';
import { useCart } from '../../hooks/useCart';

const CartIndicator = () => {
  const { cart, toggleCart } = useCart();

  const cartSize = cart.length;

  return (
    <button
      type="button"
      onClick={toggleCart}
      className="group relative border rounded-full w-10 h-10 flex justify-center items-center 
    "
    >
      <IconCart size={25} color="white" />
      {cartSize > 0 && (
        <div className="absolute top-7 right-0 rounded-full bg-red-400 w-6 h-6 flex justify-center items-center font-bold text-sm text-white">
          {cartSize}
        </div>
      )}
    </button>
  );
};

export default CartIndicator;
