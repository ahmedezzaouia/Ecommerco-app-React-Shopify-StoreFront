import { FETCH_PRODUCTS } from "../../constants";

const ProductsReducer = (products: [], action: { type: string; payload: any }) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;

    default:
      return products;
  }
};

export default ProductsReducer;
