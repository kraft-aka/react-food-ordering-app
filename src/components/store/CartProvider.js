import React, { useReducer } from "react";
import CartContext from "./cart-context";

// inital state
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// reducer function
function cartReducer(state, action) {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const removedCartItem = state.items.filter((id) => action.id !== id);
    return {
      items: removedCartItem,
    };
  }
  return defaultCartState;
}

export default function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  function addItemToCartHandler(item) {
    dispatchCartAction({ type: "ADD", item: item });
  }

  function removeItemFromCartHandler(id) {
    dispatchCartAction({ type: "REMOVE", id: id });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
