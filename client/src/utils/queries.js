import { gql } from '@apollo/client';


export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
    _id
  }
}
`;


export const QUERY_ALL_PRODUCTS = gql`
  query GetAllProducts {
    getAllProducts {
      _id
      name
      user_id
      description
      image
      price
      category {
        _id
        name
      }
    }
  }
`;


export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
export const QUERY_ORDERS = gql`
  query GetAllOrders {
  getAllOrders {
    _id
    purchaseDate
    user {
      _id
    }
    fulfilled
    products {
      _id
    }
  }
}
`;

export const QUERY_PRODUCTS_BY_IDS = gql`
  query GetProductsByIds($productIds: [ID!]!) {
    getProductsByIds(_ids: $productIds) {
      name
    }
  }
`;


export const QUERY_ORDERS_WITH_PRODUCTS = gql`
  query GetAllOrders {
  getAllOrders {
    _id
    purchaseDate
    fulfilled
    products {
      _id
      price 
      name
      image
    }
  }
}
`;

export const QUERY_ORDERS_FROM_LOGGED_IN_USER = gql`
  query GetProductsByUserId {
  getOrdersByUserId {
    products {
      _id
      name
      image
      price
    }
  }
}
`;

export const QUERY_ALL_PRODUCTS_BY_CATEGORY_NAME = gql`
  query GetAllProductsByCategoryName($categoryName: String!) {
    getAllProductsByCategoryName(categoryName: $categoryName) {
      _id
      name
      user_id
      description
      image
      price
      category {
        _id
        name
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS_BY_CATEGORY_ID = gql`
query GetAllProductsByCategoryId($categoryId: String!) {
  getAllProductsByCategoryId(categoryId: $categoryId) {
    _id
    name
  }
}
`;

export const QUERY_PRODUCTS_FROM_FOLLOWING = gql`
query GetProductsFromFollowing($userId: ID!) {
    getProductsFromFollowing(_id: $userId) {
      _id
      firstName
      following {
        _id
        
        products {
          _id
          name
          user_id
          description
          image
          price
          category {
            _id
            name
          }
        }
      }
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
query GetUserByEmail($email: String!) {
  getUserByEmail(email: $email) {
    _id
  }
}
`;