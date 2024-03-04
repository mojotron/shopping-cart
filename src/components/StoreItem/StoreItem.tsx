// icons
import { FaInfoCircle as IconInfo } from 'react-icons/fa';
// hooks
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
// types
import type { ProductType } from '../../types/productType';
// components
import ItemQuantityControl from '../ItemQuantityControl/ItemQuantityControl';
import Button from '../../ui/Button/Button';
import PriceTag from '../PriceTag/PriceTag';
import NutritionList from './NutritionList';
import LabelList from './LabelList';
import Heading from '../../ui/Heading/Heading';

const MIN_QUANTITY = 1;

type PropsType = {
  item: ProductType;
};

const StoreItem = ({ item }: PropsType) => {
  const { cart, addToCart } = useCart();
  const [showDescription, setShowDescription] = useState(false);
  const itemInCart = cart.find((cartItem) => cartItem.id === item.id);

  return (
    <article className="relative rounded-md w-[300px] h-[500px] sm:w-[500px] sm:h-[450px] flex flex-col sm:flex-row items-center justify-between gap-2 m-2 border border-gray-200">
      <div className="w-full h-[25%] sm:w-[40%] sm:h-[100%] flex items-center justify-center">
        <img
          className="relative right-0 sm:right-5 object-cover w-[100%] h-[90%] border-4 border-gray-200 shadow-[0_5px_25px_10px_rgba(0,0,0,0.3)] overflow-hidden"
          src={item.imageUrl}
          alt={item.name}
        />
      </div>

      <section className="relative bg-emerald-100 px-8 sm:pt-4 w-full sm:w-[60%] h-[100%] flex flex-col gap-2">
        {showDescription && (
          <p className="absolute top-8 sm:top-16 bg-gray-50 p-4 z-20 text-gray-600 border border-green-400 rounded-md">
            {item.description}
          </p>
        )}
        <header className="flex items-center justify-between mb-2">
          <Heading level={4}>{item.name}</Heading>
          <Button
            type="none"
            onClick={() => setShowDescription((oldValue) => !oldValue)}
          >
            <IconInfo size={18} className="text-green-600" />
          </Button>
        </header>
        <LabelList labels={item.nutrition.labels} />
        <NutritionList data={item.nutrition} />
        <footer className="flex items-end justify-between gap-5 absolute bottom-8">
          <PriceTag price={item.price} unit={`€/${item.sellingUnit}`} />
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
      </section>
    </article>
  );
};

export default StoreItem;
