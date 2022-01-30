import React from "react";
import Products from "../products/products";
import PageTitle from "../pageTitle/page_title";
import useStyles from "./styles";
import { ProductsDispatch } from "../../contexts/productsContext";
import { CartDispatch } from "../../contexts/cartContext";
import { fetchProducts } from "../../contexts/actions/productsActions";
import { fetchCart } from "../../contexts/actions/cartActions";
import Carousel from "../carousel/carousel";

const Home = () => {
  console.log("Home start");
  const classes = useStyles();
  const { dispatch: dispatchToProducts }: any = React.useContext(ProductsDispatch);
  const { dispatch: dispatchToCart }: any = React.useContext(CartDispatch);

  React.useEffect(() => {
    console.log("%c home useEffect start ", "background: white; color: green");
    fetchProducts().then((action) => dispatchToProducts(action));

    // todo : fetch cart
    const cartId = localStorage.getItem("cartId");
    console.log("cartid localstorage", cartId);
    if (cartId) {
      console.log("hey cartid ");
      fetchCart(cartId).then((action) => dispatchToCart(action));
    }
  }, [dispatchToProducts, dispatchToCart]);

  return (
    <div>
      <Carousel />
      <div className={classes.prodcuts}>
        <PageTitle
          title="Beautiful Products"
          subTitle="Quickly build an effective Shopify Storefront for your potential customers . It's built with MUI components with little customization."
        />

        <Products />
      </div>
    </div>
  );
};

export default Home;
