const { find, filter } = require('lodash');

const myResolvers = {
  Query: {
    books: () => books,
  },
};

module.exports = myResolvers;