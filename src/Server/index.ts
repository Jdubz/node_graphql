const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

const express = require('express');
const bodyParser = require('body-parser');

import "reflect-metadata";
const { createConnection } = require('typeorm');

console.log('connecting...');

const dbConfig = require('../ormconfig.json');
const schema = {
  "entities": [
    __dirname + "/schema/entity/*.ts"
  ],
    "migrations": [
      __dirname + "/schema/migration/*.ts"
  ],
  "subscribers": [
    __dirname + "/schema/subscriber/*.ts"
  ]
};

// createConnection(Object.assign(dbConfig, schema)).then((...args) => {
  console.log('Database connection established');

  const app = express();
  app.use(bodyParser.json());

  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app });

  const port = process.env.NODE_ENV === 'production' ? 8080 : 4000;

  app.listen({ port },() => {
    console.log(`🚀  Server ready at http://0.0.0.0:${port}${server.graphqlPath}`);
  });
// }).catch(err => {
//   console.error('db connection failed', err);
// });
//
