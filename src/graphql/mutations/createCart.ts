const CREATE_CART = `
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
      cart {
        id
        checkoutUrl
        createdAt
        updatedAt
        lines(first:10) {
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
                  image {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default CREATE_CART;
