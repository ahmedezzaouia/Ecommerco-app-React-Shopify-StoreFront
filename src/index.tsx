import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink, useQuery } from "@apollo/client";

const link = createHttpLink({
  uri: "https://fourniture-store.myshopify.com/api/2022-01/graphql.json",
  headers: {
    "X-Shopify-Storefront-Access-Token": "08791563014a9dd7a4bcc0b15cc8fce8",
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
