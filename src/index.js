const express = require('express');
const dotenv = require('dotenv');
const graphqlRouter = require('./graphql');

dotenv.config();  // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());  // Middleware to parse JSON

// Use the GraphQL router
app.use(graphqlRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
