import { ApolloServer } from 'apollo-server-express'
import typeDefs from './schema/typeDefs'
import resolvers from './schema/resolvers'

import mocks from './schema/mocks'

import { initLogs, log } from './utils/logger';

import express from 'express'
import bodyParser from 'body-parser'

import db from './schema/dbConnect';

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

