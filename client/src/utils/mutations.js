import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $dateOfBirth: String!
    $location: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      dateOfBirth: $dateOfBirth
      location: $location
    ) {
      token
      user {
        _id
      }
    }
  }
`;


export const CREATE_ORDER_WITH_PRODUCTS = gql`
  mutation CreateOrderWithProducts($input: OrderInput!) {
    createOrder(input: $input) {
      _id
      purchaseDate
      user {
        _id
        firstName
        lastName
        email
      }
      fulfilled
      products {
        _id
        name
        price
      }
    }
  }
`;