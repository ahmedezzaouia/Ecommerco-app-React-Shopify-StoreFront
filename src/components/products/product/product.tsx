import React from "react";
import UseStyle from "./styles";

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
  isCart: boolean;
}

const Product = ({ isCart = false }: props) => {
  console.log("Product started");
  const AddToCart = () => {
    console.log("Add to Cart");
  };

  const clasess = UseStyle();
  const CartComps = () => {
    return (
      <div className={clasess.cartComps}>
        <ButtonGroup disableElevation variant="contained">
          <Button sx={{ backgroundColor: "#00002C" }}>-</Button>
          <Typography variant="h6" sx={{ padding: "0 5px" }}>
            5
          </Typography>
          <Button sx={{ backgroundColor: "#00002C" }}>+</Button>
        </ButtonGroup>
        <Button variant="outlined" href="#contained-buttons">
          Remove
        </Button>
      </div>
    );
  };

  return (
    <Card sx={{ maxWidth: 320, borderRadius: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://media.gq.com/photos/5c3e12c622b9ff10db79c13e/master/pass/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            125$
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents
            except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isCart ? (
          <CartComps />
        ) : (
          <Button onClick={AddToCart} size="small" color="primary">
            Add To Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Product;
