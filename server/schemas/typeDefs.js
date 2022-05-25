<<<<<<< HEAD
const {gql}= require("apollo-server-express")
const typeDefs=gql`
type User{
    _id: ID
    username: String
    email: String
}
type Query{
    CurrentUser(jwt:String!): User
}
`
module.exports=typeDefs
=======
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Class {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    category: Category
  }

  type Payment {
    _id: ID
    purchaseDate: String
    Class: [Class]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    Payment: [Payment]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    Class(category: ID, name: String): [Class]
    Class(_id: ID!): Class
    user: User
    payment(_id: ID!): Payment
    checkout(Class: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addPayment(Class: [ID]!): Payment
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateClass(_id: ID!, quantity: Int!): Class
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
>>>>>>> feature/dashboard
