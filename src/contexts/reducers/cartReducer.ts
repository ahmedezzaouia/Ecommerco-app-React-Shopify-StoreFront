import { FETCH_CART, CREATE_CART, ADD_TO_CART, REMOVE_ITEM_CART, CLEAR_CART } from "../../constants";

const cartReducer = (cart: {}, action: { type: string; payload: any }) => {
  switch (action.type) {
    case FETCH_CART:
      console.log("%c fetch cart triggers", "color:white;background:green");
      return action.payload;
    case CREATE_CART:
      localStorage.setItem("cartId", action.payload.id);
      return action.payload;
    case ADD_TO_CART:
      return action.payload;
    case REMOVE_ITEM_CART:
      return action.payload;
    case CLEAR_CART:
      return {};
    default:
      return cart;
  }
};

export default cartReducer;
