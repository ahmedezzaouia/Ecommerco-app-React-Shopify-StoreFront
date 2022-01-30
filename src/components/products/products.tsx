import React, { useContext } from "react";
import Product from "./product/product";
import { Grid, CircularProgress } from "@mui/material";
import { ProductsContext } from "../../contexts/productsContext";

const Products = () => {
  console.log("Proudcts start");
  const { products }: any = useContext(ProductsContext);

  if (products.length === 0) {
    return (
      <div style={{ textAlign: "center" }}>
        <CircularProgress disableShrink />;
      </div>
    );
  }
  return (
    <Grid container spacing={4}>
      {products.map((product: any) => (
        <Grid key={product.node.id} item xs={12} sm={6} md={4}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
