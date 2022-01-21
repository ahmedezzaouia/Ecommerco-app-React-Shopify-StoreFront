import React, { useReducer } from "react";
import cartReducer from "./reducers/cartReducer";

export const CartContext = React.createContext({});
export const CartDispatch = React.createContext({});

const CartProvider = ({ children }: any) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  // const [cart, cartDispatch] = useReducer(cartReducer, {});

  return (
    <CartContext.Provider value={{ cart }}>
      <CartDispatch.Provider value={{ dispatch }}>{children}</CartDispatch.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;
