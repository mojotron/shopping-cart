import { createContext, ReactNode, useCallback, useReducer } from 'react';
import { CartItemType } from '../types/cartItemType';

type StatusType = 'loading' | 'ready' | 'shipment' | 'payment';

type StateType = {
  showCart: boolean;
  cart: CartItemType[];
  status: StatusType;
};

type ActionsType =
  | { type: 'cart/add-item'; payload: CartItemType }
  | { type: 'cart/remove-item'; payload: number }
  | { type: 'cart/clear-items' }
  | { type: 'cart/toggle' };

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
    case 'cart/remove-item': {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case 'cart/clear-items': {
      return { ...state, cart: [] };
    }
    case 'cart/toggle': {
      return { ...state, showCart: !state.showCart };
    }

    default: {
      return { ...state };
    }
  }
};

const useCartSource = (): {
  showCart: boolean;
  cart: CartItemType[];
  addToCart: (newItem: CartItemType) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
} => {
  const [{ showCart, cart }, dispatch] = useReducer(reducer, {
    cart: [],
    status: 'loading',
    showCart: false,
  });

  const addToCart = useCallback((newItem: CartItemType) => {
    dispatch({ type: 'cart/add-item', payload: newItem });
  }, []);

  const removeFromCart = useCallback((itemId: number) => {
    dispatch({ type: 'cart/remove-item', payload: itemId });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'cart/clear-items' });
  }, []);

  const toggleCart = useCallback(() => {
    dispatch({ type: 'cart/toggle' });
  }, []);

  return { showCart, cart, addToCart, removeFromCart, clearCart, toggleCart };
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
