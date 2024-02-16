import { useState } from 'react';
import { FaInfoCircle as IconInfo } from 'react-icons/fa';
import type { ProductType } from '../../types/productType';
import { useCart } from '../../hooks/useCart';
import ItemQuantityControl from '../ItemQuantityControl/ItemQuantityControl';
import Button from '../../ui/Button/Button';
import PriceTag from '../PriceTag/PriceTag';

type PropsType = {
  item: ProductType;
};

const MIN_QUANTITY = 1;

const StoreItem = ({ item }: PropsType) => {
  const { cart, addToCart } = useCart();
  const [showDescription, setShowDescription] = useState(false);
  const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

  return (
    <article className="relative rounded-md w-[450px] h-[300px] flex items-center justify-between gap-2 m-2 border border-emerald-100">
      <img
        className="relative right-5 object-cover w-[40%] h-[90%] border-4 border-emerald-200 shadow-[0_5px_25px_10px_rgba(0,0,0,0.3)] overflow-hidden"
        src={item.imageUrl}
        alt={item.name}
      />

      <div className="bg-emerald-100 px-4 p-8 w-[60%] h-[100%]">
        <header className="flex items-center justify-between">
          <h3 className="capitalize text-2xl font-righteous text-emerald-600">
            {item.name}
          </h3>

          <Button
            type="none"
            onClick={() => setShowDescription((oldValue) => !oldValue)}
          >
            <IconInfo size={18} className="text-emerald-600" />
          </Button>
        </header>
        {showDescription && (
          <p className="absolute bg-emerald-200 p-4 z-20 text-neutral-800 border border-emerald-300 rounded-md">
            {item.description}
          </p>
        )}

        <footer className="flex items-end gap-5 absolute bottom-8">
          <PriceTag price={item.price} unit="€/kg" />
          {!itemInCart && (
            <Button
              onClick={() => addToCart({ ...item, quantity: MIN_QUANTITY })}
              disabled={!item.available}
            >
              {!item.available ? 'Out of stock' : 'Add to cart'}
            </Button>
          )}
          {itemInCart && <ItemQuantityControl item={itemInCart} />}
        </footer>
      </div>
    </article>
  );
};

export default StoreItem;
