import React from "react";
import Products from "../products/products";
import PageTitle from "../pageTitle/page_title";
import useStyles from "./styles";

const Home = () => {
  console.log("Home start");

  const classes = useStyles();

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
