const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');
const mocks = require('./schema/mocks');


import { initLogs, log } from './utils/logging';

const express = require('express');
const bodyParser = require('body-parser');

import db from './schema/controllers/connect';

log.info('Connecting to DB');
db.connect()
  .then((...args) => {
  log.info('Database connection established');

  const app = express();
  initLogs(app);
  app.use(bodyParser.json());

  const server = new ApolloServer({ typeDefs, resolvers, /*mocks*/ });
  server.applyMiddleware({ app });

  const port = process.env.NODE_ENV === 'production' ? 8080 : 4000;

  app.listen({ port },() => {
    log.info(`🚀  Server ready at http://0.0.0.0:${port}${server.graphqlPath}`);
  });
}).catch(err => {
  log.error('db connection failed' + err);
});

