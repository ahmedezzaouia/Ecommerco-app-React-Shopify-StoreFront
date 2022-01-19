import { gql } from "@apollo/client";

const CREATE_CART = gql`
  mutation createCart($cartInput: CartInput) {
    cartCreate(input: $cartInput) {
      cart {
        id
        createdAt
        updatedAt
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
        attributes {
          key
          value
        }
        estimatedCost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

export default CREATE_CART;
