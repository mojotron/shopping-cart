import { MdShoppingCart as IconCart } from 'react-icons/md';

const CartIndicator = () => {
  return (
    <button
      type="button"
      className="group relative border rounded-full w-10 h-10 flex justify-center items-center 
    "
    >
      <IconCart size={25} color="white" />
      <div className="absolute top-7 right-0 rounded-full bg-red-400 w-6 h-6 flex justify-center items-center font-bold text-sm text-white">
        10
      </div>
    </button>
  );
};

export default CartIndicator;
