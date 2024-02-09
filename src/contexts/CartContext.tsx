import { createContext, ReactNode } from 'react';

const useCartSource = () => {};

export const CartContext = createContext<ReturnType<typeof useCartSource>>(
  {} as unknown as ReturnType<typeof useCartSource>
);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  <CartContext.Provider value={useCartSource()}>
    {children}
  </CartContext.Provider>;
};
