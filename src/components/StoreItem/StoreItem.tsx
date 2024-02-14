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
        {itemInCart ? (
          <ItemQuantityControl item={itemInCart} />
        ) : (
          <Button
            onClick={() => addToCart({ ...item, quantity: MIN_QUANTITY })}
            disabled={!item.available}
          >
            Add to cart
          </Button>
        )}
      </div>
    </article>
  );
};

export default StoreItem;
