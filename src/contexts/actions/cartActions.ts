import * as api from "../api";
import { CREATE_CART_QUERY, CART_ADD_QUERY, CART_REMOVE_QUERY } from "../../graphql/mutations";
import { FETCH_CART_QUERY } from "../../graphql/querys";
import { CREATE_CART, FETCH_CART, REMOVE_ITEM_CART, ADD_TO_CART } from "../../constants";

export const createCart = async (variantId: string) => {
  try {
    const response = await api.cartCreation(CREATE_CART_QUERY, {
      cartInput: {
        lines: [
          {
            quantity: 1,
            merchandiseId: variantId,
          },
        ],
        attributes: {
          key: "cart_attribute",
          value: "This is a cart attribute",
        },
      },
    });
    const { data }: any = await response.json();
    console.log("created cart", data.cartCreate.cart);
    return { type: CREATE_CART, payload: data.cartCreate.cart };
  } catch (error) {
    console.log(error);
  }
};

export const fetchCart = async (cartId: string) => {
  console.log("cart id ", cartId);
  //   console.log("query fetch cart", FETCH_CART(cartId));
  //   const query = FETCH_CART(cartId);
  try {
    const response = await api.getCart(FETCH_CART_QUERY, { cartId: cartId });
    const { data } = await response.json();
    console.log("fetched cart", data.cart);
    return { type: FETCH_CART, payload: data.cart };
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = async (variables: any) => {
  try {
    const response = await api.cartAddLine(CART_ADD_QUERY, variables);
    const { data } = await response.json();
    console.log("addToCart", data);
    return { type: ADD_TO_CART, payload: data.cartLinesAdd.cart };
  } catch (error) {
    console.log(error);
  }
};

export const removeCartLine = async (variables: any) => {
  try {
    const response = await api.cartRemoveLine(CART_REMOVE_QUERY, variables);
    const { data } = await response.json();
    console.log("removeLineCart", data);
    return { type: REMOVE_ITEM_CART, payload: data.cartLinesRemove.cart };
  } catch (error) {
    console.log(error);
  }
};
