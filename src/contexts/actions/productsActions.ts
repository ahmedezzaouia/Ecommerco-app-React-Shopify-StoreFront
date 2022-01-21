import React from "react";
import { FETCH_PRODUCTS } from "../../constants";
import { PRODUCTS_QUERY } from "../../graphql/querys";
import * as api from "../api";

export const fetchProducts = async () => {
  try {
    console.log("start fetch data");
    const response = await api.getProducts(PRODUCTS_QUERY);
    const data = await response.json();
    console.log(data);
    if (!data) {
      console.log("no products");
      return;
    }
    const products = data.data.products.edges;
    console.log(products);
    return { type: FETCH_PRODUCTS, payload: products };
  } catch (error) {
    console.log(error);
  }
};
