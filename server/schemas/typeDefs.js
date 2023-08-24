const { gql } = require('apollo-server');

const typeDefs = gql`
  type Category {
    _id: ID!
    name: String!
  }

  type Order {
    _id: ID!
    purchaseDate: String!
    user: User!
    fulfilled: Boolean!
    products: [Product!]
  }

  type Product {
    _id: ID!
    name: String!
    user_id: ID!
    description: String
    image: String
    price: Float!
    quantity: Int!
    category: Category!
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    product_id: ID!
    location: String!
    orders: [Order]
  }

  type AuthPayload {
    user: User
    token: String
  }

  input CategoryInput {
    name: String!
  }

  input OrderInput {
    purchaseDate: String
    user_id: ID!
    fulfilled: Boolean
    productIds: [ID]
  }

  input ProductInput {
    name: String!
    user_id: ID!
    description: String
    image: String
    price: Float!
    quantity: Int
    category: ID!
  }

  input UserInput {
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    product_id: ID!
    password: String!
    location: String!
  }

  type Query {
    getCategory(categoryId: ID!): Category
    getAllCategories: [Category]
    getOrder(orderId: ID!): Order
    getAllOrders: [Order]
    getProduct(productId: ID!): Product
    getAllProducts: [Product]
    getUser(userId: ID!): User
    getAllUsers: [User]
  }

  type Mutation {
    createCategory(input: CategoryInput!): Category
    updateCategory(categoryId: ID!, input: CategoryInput!): Category
    deleteCategory(categoryId: ID!): Category
    createOrder(input: OrderInput!): Order
    updateOrder(orderId: ID!, input: OrderInput!): Order
    deleteOrder(orderId: ID!): Order
    createProduct(input: ProductInput!): Product
    updateProduct(productId: ID!, input: ProductInput!): Product
    deleteProduct(productId: ID!): Product
    createUser(input: UserInput!): User
    updateUser(userId: ID!, input: UserInput!): User
    deleteUser(userId: ID!): User
    login(email: String!, password: String!): AuthPayload
  }

  extend type User {
    isCorrectPassword(password: String!): Boolean
  }
`;

module.exports = typeDefs;