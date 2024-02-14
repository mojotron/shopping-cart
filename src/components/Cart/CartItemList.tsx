import { ReactNode } from 'react';

const CartItemList = ({ children }: { children: ReactNode }) => {
  return <ul className="flex flex-col gap-5 py-5">{children}</ul>;
};

export default CartItemList;
