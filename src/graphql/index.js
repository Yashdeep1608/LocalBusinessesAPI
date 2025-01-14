const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const userSchema = require('./schema/userSchema');  // Ensure this is correct path to your schema
const userResolver = require('./resolvers/userResolver');  // Ensure this is correct path to your resolvers

const graphqlRouter = express.Router();

// Set up the GraphQL endpoint
graphqlRouter.use(
  '/graphql',
  graphqlHTTP({
    schema: userSchema,  // Pass the schema here
    graphiql: true, // Enable the GraphiQL UI for testing
    context: {
      userResolver, // Provide resolver functions in the context
    },
  })
);

module.exports = graphqlRouter;
