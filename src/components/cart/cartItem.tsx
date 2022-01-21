import React from "react";
import UseStyle from "../products/product/styles";
import { removeCartLine } from "../../contexts/actions/cartActions";
import { CartContext, CartDispatch } from "../../contexts/cartContext";

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

const CartItem = ({ product }: props) => {
  console.log("Product started");
  const { cart }: any = React.useContext(CartContext);
  const { dispatch }: any = React.useContext(CartDispatch);
  const clasess = UseStyle();
  const [quantity, setQuantity] = React.useState(1);

  const onRemoveItem = async () => {
    const action = await removeCartLine({
      cartId: cart.id,
      lineIds: [product.node.id],
    });
    dispatch(action);
  };

  const CartComps = () => {
    return (
      <div className={clasess.cartComps}>
        <ButtonGroup disableElevation variant="contained">
          <Button
            onClick={() => {
              if (quantity >= 2) setQuantity(quantity - 1);
            }}
            sx={{ backgroundColor: "#00002C" }}
          >
            -
          </Button>
          <Typography variant="h6" sx={{ padding: "0 5px" }}>
            {quantity}
          </Typography>
          <Button
            onClick={() => {
              setQuantity(quantity + 1);
            }}
            sx={{ backgroundColor: "#00002C" }}
          >
            +
          </Button>
        </ButtonGroup>
        <Button onClick={onRemoveItem} variant="outlined" href="#contained-buttons">
          Remove
        </Button>
      </div>
    );
  };

  return (
    <Card className={clasess.cartItem}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          sx={{ maxHeight: "190px" }}
          image={product.node.merchandise.product.featuredImage.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.node.merchandise.product.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ${product.node.merchandise.product.variants.edges[0].node.priceV2.amount}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.node.merchandise.product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <CartComps />
      </CardActions>
    </Card>
  );
};

export default CartItem;
