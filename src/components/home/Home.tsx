import React from "react";
import Products from "../products/products";
import PageTitle from "../pageTitle/page_title";
import useStyles from "./styles";
import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";

const Home = () => {
  const classes = useStyles();
  const query = gql`
    {
      products(first: 5) {
        edges {
          node {
            id
          }
        }
      }
    }
  `;
  const res = useQuery(query);
  console.log(res);

  // console.log(data);
  // if (loading) return <div>Loading....</div>;
  // if (error) return <h1>Error! ${error.message}</h1>;

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
