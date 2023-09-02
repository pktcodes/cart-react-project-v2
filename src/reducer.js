import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  LOADING,
  DISPLAY_CART_ITEMS,
} from './actions';

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE_ITEM) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE_AMOUNT) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE_AMOUNT) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);

    if (item.amount === 1) {
      newCart.delete(itemId);
      return { ...state, cart: newCart };
    }

    const newItem = { ...item, amount: item.amount - 1 };
    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === DISPLAY_CART_ITEMS) {
    const newCart = new Map(
      action.payload.cartData.map((item) => [item.id, item])
    );

    return { ...state, loading: false, cart: newCart };
  }

  throw new Error(`No matching action type found: ${action.type}`);
};

export default reducer;
