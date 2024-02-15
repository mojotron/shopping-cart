import { useState } from 'react';
import { FaInfoCircle as IconInfo } from 'react-icons/fa';
import type { ProductType } from '../../types/productType';
import { useCart } from '../../hooks/useCart';
import Button from '../../ui/Button/Button';
import ItemQuantityControl from '../ItemQuantityControl/ItemQuantityControl';
type PropsType = {
  item: ProductType;
};

const MIN_QUANTITY = 1;

const StoreItem = ({ item }: PropsType) => {
  const { cart, addToCart } = useCart();
  const itemInCart = cart.find((cartItem) => cartItem.id === item.id);
  const [showDescription, setShowDescription] = useState(false);

  return (
    <article className="w-[500px] h-[300px] flex justify-center gap-2 relative m-2 p-5 border">
      {/* <img className="object-contain" src={item.imageUrl} alt={item.name} /> */}

      <div className="bg-emerald-100 p-4">
        <h3 className="capitalize text-lg font-righteous text-emerald-600">
          {item.name}
        </h3>
        <p>Price per kilo: €{item.price}</p>
        <Button
          type="none"
          onClick={() => setShowDescription((oldValue) => !oldValue)}
        >
          <IconInfo size={15} className="text-emerald-600" />
        </Button>
        {showDescription && (
          <p className="absolute bg-emerald-200 p-4 z-20 text-neutral-800 border border-emerald-300 rounded-md">
            {item.description}
          </p>
        )}
        {itemInCart ? (
          <ItemQuantityControl item={itemInCart} />
        ) : (
          <Button
            onClick={() => addToCart({ ...item, quantity: MIN_QUANTITY })}
            disabled={!item.available}
          >
            {!item.available ? 'Out of stock' : 'Add to cart'}
          </Button>
        )}
      </div>
    </article>
  );
};

export default StoreItem;
