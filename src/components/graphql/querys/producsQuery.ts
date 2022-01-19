import { gql } from "@apollo/client";

const PRODUCTS_QUERY = gql`
  {
    products(first: 5) {
      edges {
        node {
          title
          id
          variants(first: 10) {
            edges {
              node {
                id
              }
            }
          }
        }
      }
    }
  }
`;
export default PRODUCTS_QUERY;
