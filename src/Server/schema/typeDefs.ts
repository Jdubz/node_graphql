import { gql } from 'apollo-server-express';

module.exports = gql`
  type User {
    id: ID!
    username: String!
    email: String
  }
  
  type Message {
    id: ID!
    user: Int!
    message: String
    createdAt: Int!
  }

  type Query {
    user(id: ID): User
    messages(user: ID): [Message]
  }
  
  type Mutation {
    createUser(username: String, email: String): User
    createMessage(user: ID, message: String): Message
  }
`;
