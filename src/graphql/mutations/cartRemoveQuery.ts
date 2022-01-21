const gql = String.raw;

const CART_REMOVE_QUERY = gql`
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        checkoutUrl
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  compareAtPriceV2 {
                    amount
                    currencyCode
                  }
                  product {
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
          }
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`;

export default CART_REMOVE_QUERY;
