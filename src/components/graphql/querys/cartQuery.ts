import { gql } from "@apollo/client";

const FETCH_CART = (id: string) => gql`
  {
    cart(id: ${id}) {
      id
      createdAt
      updatedAt
    }
  }
`;

export default FETCH_CART;
