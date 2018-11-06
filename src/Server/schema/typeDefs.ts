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
    timestamp: String
  }

  type Query {
    messages: [Message]
    user: User
  }
`;

module.exports = typeDefs;