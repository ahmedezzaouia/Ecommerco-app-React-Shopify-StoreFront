const gql = String.raw;
const CART_ADD_QUERY = gql`
  mutation addToCart($variantId: ID!, $cartId: ID!) {
    cartLinesAdd(lines: [{ merchandiseId: $variantId }], cartId: $cartId) {
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

export default CART_ADD_QUERY;
