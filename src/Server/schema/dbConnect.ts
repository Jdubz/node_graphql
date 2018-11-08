import "reflect-metadata";
const { getConnectionManager } = require('typeorm');

const connectionManager = getConnectionManager();

const dbConfig = require('../../ormconfig.json');

const User = require('./entity/User');
const Message = require('./entity/Message');

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