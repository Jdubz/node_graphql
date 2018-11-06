import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: Int!
    username: String!
    email: String
    messages: [Message]
  }
  
  type Message {
    id: Int!
    user_id(id: Int!): User
    message: String
    createdAt: Date
  }

  type Query {
    messages: [Message]
    user: User
  }
  
  type Mutation {
    addUser(username: String, email: String): User
    addMessage(user_id: Int, message: String): Message
  }
`;

module.exports = typeDefs;