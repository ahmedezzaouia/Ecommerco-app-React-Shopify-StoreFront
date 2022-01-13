import { Container, Grid } from "@mui/material";
import PageTitle from "../pageTitle/page_title";
import useStyle from "./styles";
import Product from "../products/product/product";

const Cart = () => {
  const clasess = useStyle();
  const products = [1, 2, 3, 4, 5];
  return (
    <Container className={clasess.root}>
      <PageTitle title="Your Cart" />
      <Grid container spacing={2}>
        {products.map(() => (
          <Grid item xs={12} sm={3}>
            <Product />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cart;
