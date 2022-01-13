import React from "react";
import Product from "./product/product";
import { Grid, makeStyles } from "@mui/material";
import useStyles from "./styles";
import Pagetitle from "../pageTitle/page_title";

const Products = () => {
  const classes = useStyles();
  const products = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={classes.prodcuts}>
      <Pagetitle title="All Products" />
      <Grid container spacing={2}>
        {products.map(() => (
          <Grid item xs={12} sm={3}>
            <Product />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
