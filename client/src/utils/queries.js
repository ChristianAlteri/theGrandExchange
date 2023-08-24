import { gql } from '@apollo/client';

export const QUERY_ALL_PRODUCTS = gql`
    query GetAllProducts {
    getAllProducts {
        _id
        name
        user_id
        description
        image
        price

  }
}
`;
