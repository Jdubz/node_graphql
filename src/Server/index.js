var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var _a = require('apollo-server'), ApolloServer = _a.ApolloServer, gql = _a.gql;
// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
var books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling'
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton'
    },
    {
        title: 'Some Other Book',
        author: 'Just some Author'
    },
];
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
var typeDefs = gql(__makeTemplateObject(["\n  # Comments in GraphQL are defined with the hash (#) symbol.\n\n  # This \"Book\" type can be used in other type declarations.\n  type Book {\n    title: String\n    author: String\n  }\n\n  # The \"Query\" type is the root of all GraphQL queries.\n  # (A \"Mutation\" type will be covered later on.)\n  type Query {\n    books: [Book]\n  }\n"], ["\n  # Comments in GraphQL are defined with the hash (#) symbol.\n\n  # This \"Book\" type can be used in other type declarations.\n  type Book {\n    title: String\n    author: String\n  }\n\n  # The \"Query\" type is the root of all GraphQL queries.\n  # (A \"Mutation\" type will be covered later on.)\n  type Query {\n    books: [Book]\n  }\n"]));
// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve books from the "books" array above.
var resolvers = {
    Query: {
        books: function () { return books; }
    }
};
// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
var server = new ApolloServer({ typeDefs: typeDefs, resolvers: resolvers });
// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("\uD83D\uDE80  Server ready at " + url);
});
