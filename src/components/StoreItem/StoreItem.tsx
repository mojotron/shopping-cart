import { useState } from 'react';
import type { ProductType } from '../../types/productType';
import { useCart } from '../../hooks/useCart';

type PropsType = {
  item: ProductType;
};

const MIN_QUANTITY = 1;

const StoreItem = ({ item }: PropsType) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(MIN_QUANTITY);

  // temp => context
  const handleAddItem = () => {
    addToCart({ ...item, quantity });
    setQuantity(MIN_QUANTITY);
  };

  return (
    <article className="w-[350px] flex justify-center gap-2 relative m-2 p-5 border">
      <img
        className="w-[180px] h-[240px] object-cover"
        src={item.imageUrl}
        alt={item.name}
      />
      <div className="bg-emerald-100 w-[240px]">
        <h3 className="capitalize text-lg">{item.name}</h3>
        <p>Price per kilo: €{item.price}</p>
        <label>
          <input
            type="number"
            min={MIN_QUANTITY}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          Quantity(kg):{' '}
        </label>
        <button
          className="px-2 py-1 bg-emerald-400 disabled:bg-gray-200"
          type="button"
          onClick={handleAddItem}
          disabled={item.available}
        >
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default StoreItem;
