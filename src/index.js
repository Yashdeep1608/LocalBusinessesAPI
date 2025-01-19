const {ApolloServer} = require('@apollo/server');
const { typeDefs, resolvers } = require('./graphql/index');
const express = require('express');
const {expressMiddleware} = require('@apollo/server/express4');
const bodyParser = require("body-parser");
const cors = require("cors")
const authenticateJWT = require("./middleware/authenticateMiddleware"); 
async function startServer(){
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      // Add the user to the GraphQL context if authenticated
      const user = req.user || null;
      return { user };
    },
  });
  const port = 5000;

  app.use(cors())
  app.use(bodyParser.json());
  app.use(authenticateJWT);  // Add this middleware to protect your endpoints.
  await server.start();
  app.use('/graphql',(req, res, next) => authenticateJWT(req, res, next),expressMiddleware(server));
  app.listen(port, () => {console.log("Server is started on port: " + port)})
}

startServer();