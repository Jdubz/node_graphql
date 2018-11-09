import "reflect-metadata";
import { getConnectionManager } from 'typeorm';

const connectionManager = getConnectionManager();

const dbConfig = require('../../ormconfig.json');

import { User } from './entity/User';
import { Message } from './entity/Message';

const schema = {
  entities: [ User, Message ],
  migrations: [
    __dirname + "/schema/migration/**/*.ts"
  ],
  subscribers: [
    __dirname + "/schema/subscriber/**/*.ts"
  ]
};

const db = connectionManager.create(Object.assign(dbConfig, schema));

export default db;