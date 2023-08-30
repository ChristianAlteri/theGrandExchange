import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      userName
      firstName
      lastName
      email
      location
    }
  }
`;


export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
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
