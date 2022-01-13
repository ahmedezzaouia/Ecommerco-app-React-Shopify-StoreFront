import React from "react";
import { Button, CardActionArea, CardActions, Typography, CardMedia, CardContent, Card } from "@mui/material";

const product = () => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
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
        <Button size="small" color="primary">
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default product;
