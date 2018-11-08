import { gql } from 'apollo-server-express';

module.exports = gql`
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
    createdAt: Int!
  }

  type Query {
    allUsers: [User]
    User: User
  }
  
  type Mutation {
    createUser(username: String, email: String): User
    createMessage(user_id: Int, message: String): Message
  }
`;
