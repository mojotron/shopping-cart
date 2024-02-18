import React from 'react';
import { CartItemType } from '../../types/cartItemType';
import ItemQuantityControl from '../ItemQuantityControl/ItemQuantityControl';

const CartItem = ({ item }: { item: CartItemType }) => {
  const totalPrice = item.price * item.quantity;
  return (
    <li className="f-full h-28 flex gap-4 bg-emerald-50 p-1 rounded-md">
      <img
        className="w-24 h-full object-cover"
        src={item.imageUrl}
        alt={item.name}
      />
      <div className="flex flex-col">
        <h3 className="capitalize text-xl font-righteous text-emerald-600">
          {item.name}
        </h3>
        <div className="text-xs text-neutral-500 flex flex-col mt-1">
          <p>quantity {item.quantity}</p>
          <p>selling unit 1 {item.sellingUnit}</p>
          <p>price per unit {item.price.toFixed(2)} €</p>
        </div>
      </div>
      <div className="ml-auto flex flex-col justify-center items-center gap-1 font-bold text-neutral-600">
        <p className="text-xl">{totalPrice.toFixed(2)} €</p>
        <ItemQuantityControl item={item} />
      </div>
    </li>
  );
};

export default CartItem;
