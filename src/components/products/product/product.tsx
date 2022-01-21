import React from "react";
import useStyle from "./styles";
import { createCart, addToCart } from "../../../contexts/actions/cartActions";
import { CartContext, CartDispatch } from "../../../contexts/cartContext";
import { useNavigate } from "react-router-dom";

import {
  Button,
  CardActionArea,
  CardActions,
  Typography,
  CardMedia,
  CardContent,
  Card,
  ButtonGroup,
} from "@mui/material";

interface props {
  product: any;
}

const Product = ({ product }: props) => {
  console.log("Product started");
  const clasess = useStyle();
  const navigateTo = useNavigate();

  const { cart }: any = React.useContext(CartContext);
  const { dispatch }: any = React.useContext(CartDispatch);

  const AddToCart = async () => {
    if (!cart.id) {
      /* todo : if Cart is empty :
      create cart and store key in local storage 
      */
      console.log("Add to Cart  <<create Cart>>");
      const action = await createCart(product.node.variants.edges[0].node.id);
      dispatch(action);
      console.log("action = ", action);
    } else {
      /* todo : if Cart is there :
      add item to cart
      */
      console.log("Add to Cart  <<add to Cart>>");
      const action = await addToCart({
        variantId: product.node.variants.edges[0].node.id,
        cartId: cart.id,
      });
      dispatch(action);
    }
  };

  return (
    <Card className={clasess.product}>
      <CardActionArea
        onClick={() => {
          console.log("product click");
          navigateTo(`/product/${product.node.id}`);
        }}
      >
        <CardMedia
          component="img"
          height="140"
          sx={{ maxHeight: "190px" }}
          image={product.node.featuredImage.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.node.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${product.node.variants.edges[0].node.priceV2.amount}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.node.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={AddToCart} size="small" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
