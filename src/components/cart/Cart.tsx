import { Container, Grid } from "@mui/material";
import PageTitle from "../pageTitle/page_title";
import useStyle from "./styles";
import Product from "../products/product/product";

const Cart = () => {
  const clasess = useStyle();
  const products = [1, 2, 3, 4, 5];
  return (
    <Container className={clasess.root}>
      <PageTitle title="Your Cart" subTitle="" />
      <Grid container spacing={4}>
        {products.map(() => (
          <Grid item xs={12} sm={6} md={4}>
            <Product isCart={true} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cart;
