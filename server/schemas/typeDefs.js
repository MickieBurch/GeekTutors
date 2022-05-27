const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    enrolledSubject: Subject
    isProctor: Boolean
  }
  type Subject{
    _id: ID
    proctor: User
    description: String
    articles: [Article]
  }

  type Article{
    _id: ID
    name: String
    image: String
    body: String
  }
  type Auth {
    token: ID
    user: User
  }

  type Query {
    GetAllUsers: [User]
    GetCurrentUser: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
