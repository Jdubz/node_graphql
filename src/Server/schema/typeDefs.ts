import { gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: Number
    username: String
    email: String
  }
  
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

module.exports = typeDefs;