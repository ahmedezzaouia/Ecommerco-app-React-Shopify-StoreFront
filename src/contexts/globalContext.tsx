import React, { useReducer } from "react";
import productsReducer from "./reducers/productsReducer";
import cartReducer from "./reducers/cartReducer";

export const GlobalContext = React.createContext({});

const GlobalContextProvider = ({ children }: any) => {
  const useProducts = useReducer(productsReducer, []);
  const useCart = useReducer(cartReducer, {});

  return <GlobalContext.Provider value={{ useProducts, useCart }}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
