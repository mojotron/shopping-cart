import { createContext, ReactNode, useReducer } from 'react';
import { ProductType } from '../types/productType';

type StatusType = 'loading' | 'ready' | 'shipment' | 'payment';

type StateType = {
  cart: ProductType[];
  status: StatusType;
};

type ActionsType =
  | { type: 'cart/add-item'; payload: ProductType }
  | { type: 'cart/remove-item' };

const reducer = (state: StateType, action: ActionsType): StateType => {
  switch (action.type) {
    case 'cart/add-item': {
      return { ...state, cart: [...state.cart, action.payload] };
    }
    default: {
      return { ...state };
    }
  }
};

const useCartSource = () => {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
    status: 'loading',
  });
};

export const CartContext = createContext<ReturnType<typeof useCartSource>>(
  {} as unknown as ReturnType<typeof useCartSource>
);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  <CartContext.Provider value={useCartSource()}>
    {children}
  </CartContext.Provider>;
};
