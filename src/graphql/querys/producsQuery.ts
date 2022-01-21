import { gql } from "@apollo/client";

const PRODUCTS_QUERY = `
{
products(first: 5) {
    edges {
      node {
        title
        id
        description
        featuredImage {
          url
        }
        variants(first: 1) {
          edges {
            node {
              id
              priceV2 {
              amount
              currencyCode
            }
            }
          }
        }
      }
    }
  }
}
`;
export default PRODUCTS_QUERY;
