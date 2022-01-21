import React from "react";
import productsReducer from "./reducers/productsReducer";

export const ProductsContext = React.createContext({});
export const ProductsDispatch = React.createContext({});

const ProductstProvider = ({ children }: any) => {
  const [products, dispatch] = React.useReducer(productsReducer, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      <ProductsDispatch.Provider value={{ dispatch }}>{children}</ProductsDispatch.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductstProvider;
