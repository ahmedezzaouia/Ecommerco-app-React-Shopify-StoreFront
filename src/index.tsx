import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink, useQuery } from "@apollo/client";

const link = createHttpLink({
  uri: process.env.REACT_APP_STORE_GRAPHQL_API,
  headers: {
    "X-Shopify-Storefront-Access-Token": process.env.REACT_APP_STORE_FRONT_KEY,
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
