import { FETCH_CART } from "../../constants";

const cartReducer = (cart: object, action: { type: string; payload: any }) => {
  switch (action.type) {
    case FETCH_CART:
      return action.payload;

    default:
      return cart;
  }
};

export default cartReducer;
