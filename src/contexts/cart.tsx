import React, { createContext } from "react";
export const CartContext = React.createContext({});

const CartContextProvider = ({ children }: any) => {
  const name = "ahmed";
  const age = 28;

  const increseAge = () => {
    age + 1;
  };
  return <CartContext.Provider value={{ name, age, increseAge }}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
