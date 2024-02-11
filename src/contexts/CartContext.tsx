import { createContext, ReactNode, useCallback, useReducer } from 'react';
import { CartItemType } from '../types/cartItemType';

type StatusType = 'loading' | 'ready' | 'shipment' | 'payment';

type StateType = {
  cart: CartItemType[];
  status: StatusType;
};

type ActionsType =
  | { type: 'cart/add-item'; payload: CartItemType }
  | { type: 'cart/remove-item' };

const reducer = (state: StateType, action: ActionsType): StateType => {
  switch (action.type) {
    case 'cart/add-item': {
      const itemExists = state.cart.find(
        (item) => item.id === action.payload.id
      );
      // item doesnt exist and item to the cart
      if (itemExists === undefined) {
        return { ...state, cart: [...state.cart, action.payload] };
      }
      // item exists, update quantity ot that item
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        ),
      };
    }
    default: {
      return { ...state };
    }
  }
};

const useCartSource = (): { addToCart: (newItem: CartItemType) => void } => {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
    status: 'loading',
  });

  const addToCart = useCallback((newItem: CartItemType) => {
    console.log('YO');
    dispatch({ type: 'cart/add-item', payload: newItem });
  }, []);

  return { addToCart };
};

export const CartContext = createContext<ReturnType<typeof useCartSource>>(
  {} as unknown as ReturnType<typeof useCartSource>
);

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <CartContext.Provider value={useCartSource()}>
      {children}
    </CartContext.Provider>
  );
};
