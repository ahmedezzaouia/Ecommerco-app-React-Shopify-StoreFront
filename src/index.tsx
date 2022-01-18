import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink, useQuery } from "@apollo/client";

const link = createHttpLink({
  uri: "https://fourniture-store.myshopify.com/api/2022-01/graphql.json",
  credentials: "include",

  headers: {
    "Content-type": "application/graphql",
    "X-Shopify-Storefront-Access-Token": "08791563014a9dd7a4bcc0b15cc8fce8",
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

// fetch("https://fourniture-store.myshopify.com/api/2022-01/graphql.json");

// const client = ...
// const query = gql`
//   {
//     products(first: 5) {
//       edges {
//         node {
//           id
//         }
//       }
//     }
//   }
// `;

// const { data } = useQuery(query);
// console.log(data);
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
