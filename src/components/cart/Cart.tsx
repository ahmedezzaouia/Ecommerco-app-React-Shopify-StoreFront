import React from "react";
import { Container, Grid, Button } from "@mui/material";
import PageTitle from "../pageTitle/page_title";
import useStyle from "./styles";
import CartItem from "./cartItem";
import { CartContext, CartDispatch } from "../../contexts/cartContext";
import { CLEAR_CART } from "../../constants";

const Cart = () => {
  console.log("cartComponent start");
  const clasess = useStyle();
  const { cart }: any = React.useContext(CartContext);
  const { dispatch }: any = React.useContext(CartDispatch);
  const clearCart = () => {
    localStorage.removeItem("cartId");
    dispatch({ type: CLEAR_CART });
  };
  if (!cart?.lines?.edges) return <PageTitle title={"Add Products To Your Cart"} subTitle="" />;
  return (
    <Container className={clasess.root}>
      <PageTitle title={cart?.lines?.edges?.length !== 0 ? "Your Cart" : "Add Products To Your Cart"} subTitle="" />
      <Grid container spacing={4}>
        {cart.lines.edges.map((item: any) => (
          <Grid key={item.node.id} item xs={12} sm={6} md={4}>
            <CartItem product={item} />
          </Grid>
        ))}
      </Grid>
      {cart?.lines?.edges.length !== 0 && (
        <div>
          <Button onClick={clearCart} sx={{ margin: "40px" }} variant="outlined">
            Clear
          </Button>

          <a style={{ textDecoration: "none" }} href={cart.checkoutUrl}>
            <Button sx={{ background: "rgb(0, 0, 35)" }} variant="contained">
              Checkout
            </Button>
          </a>
        </div>
      )}
    </Container>
  );
};

export default Cart;
