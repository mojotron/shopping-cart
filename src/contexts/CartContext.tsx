import { createContext, ReactNode, useCallback, useReducer } from 'react';
import { CartItemType } from '../types/cartItemType';

type StatusType = 'loading' | 'ready' | 'shipment' | 'payment';

type StateType = {
  showCart: boolean;
  cart: CartItemType[];
  status: StatusType;
};

type UpdateQuantityType = 'increment' | 'decrement';

type ActionsType =
  | { type: 'cart/add-item'; newItem: CartItemType }
  | { type: 'cart/increment-quantity'; itemId: number }
  | { type: 'cart/decrement-quantity'; itemId: number }
  | { type: 'cart/remove-item'; itemId: number }
  | { type: 'cart/clear-items' }
  | { type: 'cart/toggle' };

const reducer = (state: StateType, action: ActionsType): StateType => {
  switch (action.type) {
    case 'cart/add-item': {
      return { ...state, cart: [...state.cart, action.newItem] };
    }
    case 'cart/increment-quantity': {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }
    case 'cart/decrement-quantity': {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    }
    case 'cart/remove-item': {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.itemId),
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
  updateItemQuantity: (itemId: number, option: UpdateQuantityType) => void;
  clearCart: () => void;
  toggleCart: () => void;
} => {
  const [{ showCart, cart }, dispatch] = useReducer(reducer, {
    cart: [],
    status: 'loading',
    showCart: false,
  });

  const addToCart = useCallback((newItem: CartItemType) => {
    dispatch({ type: 'cart/add-item', newItem });
  }, []);

  const removeFromCart = useCallback((itemId: number) => {
    dispatch({ type: 'cart/remove-item', itemId });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'cart/clear-items' });
  }, []);

  const toggleCart = useCallback(() => {
    dispatch({ type: 'cart/toggle' });
  }, []);

  const updateItemQuantity = useCallback(
    (itemId: number, option: UpdateQuantityType) => {
      if (option === 'increment')
        dispatch({ type: 'cart/increment-quantity', itemId });
      if (option === 'decrement') {
        dispatch({ type: 'cart/decrement-quantity', itemId });
      }
    },
    []
  );

  return {
    showCart,
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    toggleCart,
    updateItemQuantity,
  };
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
