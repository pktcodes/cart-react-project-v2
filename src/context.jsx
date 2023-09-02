import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import cartItems from './data';
import { getTotals } from './utils';
import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  LOADING,
  DISPLAY_CART_ITEMS,
} from './actions';

const url = 'https://www.course-api.com/react-useReducer-cart-project';

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { totalAmount, totalCost } = getTotals(state.cart);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const increaseAmount = (id) => {
    dispatch({ type: INCREASE_AMOUNT, payload: { id } });
  };

  const decreaseAmount = (id) => {
    dispatch({ type: DECREASE_AMOUNT, payload: { id } });
  };

  const fetchCartData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cartData = await response.json();
    dispatch({ type: DISPLAY_CART_ITEMS, payload: { cartData } });
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseAmount,
        decreaseAmount,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
