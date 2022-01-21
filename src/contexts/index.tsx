import React from "react";

import ProductsProvider from "./productsContext";
import CartProvider from "./cartContext";

const GlobalProvider = ({ children }: any) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  );
};

export default GlobalProvider;
