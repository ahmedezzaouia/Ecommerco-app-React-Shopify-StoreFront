import React from "react";
import Products from "../products/products";
import PageTitle from "../pageTitle/page_title";
import useStyles from "./styles";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { PRODUCTS_QUERY, FETCH_CART } from "../graphql/querys";
import { CREATE_CART } from "../graphql/mutations";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart";

const Home = () => {
  const classes = useStyles();

  const { data, error, loading } = useQuery(PRODUCTS_QUERY);
  const [createCart, res] = useMutation(CREATE_CART);
  const cartData = useQuery(FETCH_CART("Z2lkOi8vc2hvcGlmeS9DYXJ0Lzc5YjNjYWYwNTdlOTcwMDQ4ODdmMzgwZTdjY2MzNzE5"));
  console.log(data);

  const { age, increseAge }: any = useContext(CartContext);
  return (
    <div className={classes.prodcuts}>
      <PageTitle
        title="Beautiful Products"
        subTitle=" Quickly build an effective pricing table for your potential customers with this layout. It's built with
              default MUI components with little customization."
      />
      {data &&
        data.products.edges.map((el: { node: { title: string } }) => (
          <button onClick={() => {}}>{el.node.title}</button>
        ))}

      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <button
        onClick={async () => {
          createCart({
            variables: {
              cartInput: {
                lines: [
                  {
                    quantity: 6,
                    merchandiseId: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTM5NjUyMTI3MTQ5MQ==",
                  },
                ],
              },
            },
          });
        }}
      >
        CRETAE CART
      </button>
      <button
        onClick={() => {
          console.log(cartData.data.cart);
        }}
      >
        Fetch Cart
      </button>
      <hr />
      <hr />
      <button onClick={increseAge}>increse Age</button>
      <h1>{age}</h1>
      <hr />
      <Products />
    </div>
  );
};

export default Home;
