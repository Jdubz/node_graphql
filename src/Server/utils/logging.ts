const winston = require('winston');
const expressWinston = require('express-winston');
const { LoggingWinston } = require('@google-cloud/logging-winston');

const loggingWinston = new LoggingWinston({
  keyFilename: './auth/graphql-boilerplate.json'
});

const log = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    // Add Stackdriver Logging
    loggingWinston,
  ]
});

const colorize = process.env.NODE_ENV !== 'production';

const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: false,
      colorize,
    }),
  ],
  expressFormat: true,
  meta: false,
});

const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize,
    }),
  ],
});

const initLogs = (app) => {
  app.use(requestLogger);
  app.use(errorLogger);
};

module.exports = {
  initLogs,
  log
};