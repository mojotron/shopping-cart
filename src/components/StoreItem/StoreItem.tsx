import type { ProductType } from '../../types/productType';
import { useCart } from '../../hooks/useCart';

type PropsType = {
  item: ProductType;
};

const MIN_QUANTITY = 1;

const StoreItem = ({ item }: PropsType) => {
  const { cart, addToCart, removeFromCart, updateItemQuantity } = useCart();
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
          <div>
            <div>
              <button
                type="button"
                onClick={() => {
                  if (itemInCart.quantity === 1) removeFromCart(item.id);
                  else updateItemQuantity(item.id, 'decrement');
                }}
              >
                -
              </button>
              <span>{itemInCart.quantity}</span>
              <button
                type="button"
                onClick={() => updateItemQuantity(item.id, 'increment')}
              >
                +
              </button>
            </div>
            <button type="button" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        ) : (
          <div>
            <button
              className="px-2 py-1 bg-emerald-400 disabled:bg-gray-200"
              type="button"
              onClick={() => addToCart({ ...item, quantity: MIN_QUANTITY })}
              disabled={!item.available}
            >
              Add to cart
            </button>
          </div>
        )}
      </div>
    </article>
  );
};

export default StoreItem;
