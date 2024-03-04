import { useCart } from '../../hooks/useCart';
import { CartItemType } from '../../types/cartItemType';
import Button from '../../ui/Button/Button';

type PropsType = {
  item: CartItemType;
};

const ItemQuantityControl = ({ item }: PropsType) => {
  const { updateItemQuantity, removeFromCart } = useCart();

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center justify-center gap-1">
        <Button
          type="increment"
          onClick={() => {
            if (item.quantity === 1) removeFromCart(item.id);
            else updateItemQuantity(item.id, 'decrement');
          }}
        >
          -
        </Button>

        <span className="w-6 text-center font-bold font-righteous text-emerald-600">
          {item.quantity}
        </span>

        <Button
          type="increment"
          onClick={() => updateItemQuantity(item.id, 'increment')}
        >
          +
        </Button>
      </div>

      <Button type="remove" onClick={() => removeFromCart(item.id)}>
        Remove
      </Button>
    </div>
  );
};

export default ItemQuantityControl;
