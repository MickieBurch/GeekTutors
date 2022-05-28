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
    GetAllUsers(token:String!): [User]
    GetCurrentUser(token:String!): User
    GetAllArticles(token:String!): [Article]
    GetArticleById(token:String!,id:ID!): Article
    GetAllSubjects(token:String!): [Subject]
    GetSubjectById(token:String!,id:ID!): Subject
  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    enrollStudent(token:String!,subjectId:ID!): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
