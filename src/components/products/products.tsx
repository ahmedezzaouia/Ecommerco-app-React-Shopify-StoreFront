import React from "react";
import Product from "./product/product";
import { Grid, makeStyles } from "@mui/material";
import Pagetitle from "../pageTitle/page_title";

const Products = () => {
  const products = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Grid container spacing={4}>
      {products.map(() => (
        <Grid item xs={12} sm={6} md={4}>
          <Product isCart={false} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
