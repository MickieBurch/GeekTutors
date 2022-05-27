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
    name: String
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
    GetAllArticles: [Article]
    GetArticleById(id:ID!): Article
    GetAllSubjects: [Subject]
    GetSubjectById(id:ID!): Subject
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    enrollStudent(subjectId:ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
