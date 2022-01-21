const FETCH_CART = `

 query getCart($cartId:ID!){
  cart(id: $cartId) {
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
  
`;

export default FETCH_CART;
