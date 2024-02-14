import React from 'react';
import { CartItemType } from '../../types/cartItemType';
import ItemQuantityControl from '../ItemQuantityControl/ItemQuantityControl';

const CartItem = ({ item }: { item: CartItemType }) => {
  const totalPrice = item.price * item.quantity;
  return (
    <li className="flex gap-2">
      <img
        className="w-16 h-16 object-cover"
        src={item.imageUrl}
        alt={item.name}
      />
      <div>
        <h3 className="capitalize text-lg">{item.name}</h3>
        <p>€{totalPrice}</p>
        <ItemQuantityControl item={item} />
      </div>
    </li>
  );
};

export default CartItem;
