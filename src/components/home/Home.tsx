import React from "react";
import Products from "../products/products";
import PageTitle from "../pageTitle/page_title";
import useStyles from "./styles";
import { ProductsDispatch } from "../../contexts/productsContext";
import { CartDispatch } from "../../contexts/cartContext";
import { fetchProducts } from "../../contexts/actions/productsActions";
import { fetchCart } from "../../contexts/actions/cartActions";

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
  }, []);

  return (
    <div className={classes.prodcuts}>
      <PageTitle
        title="Beautiful Products"
        subTitle=" Quickly build an effective pricing table for your potential customers with this layout. It's built with
              default MUI components with little customization."
      />

      <Products />
    </div>
  );
};

export default Home;
