import { ReactNode } from 'react';

const CartItemList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="flex flex-col gap-5 py-5 overflow-scroll overscroll-contain">
      {children}
    </ul>
  );
};

export default CartItemList;
