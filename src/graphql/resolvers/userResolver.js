// src/graphql/resolvers/userResolver.js
const db = require('../../config/dbConfig'); // assuming db is configured and exported from dbConfig

// Resolver functions
const userResolver = {
  // Fetch all users
  getUsers: async () => {
    const res = await db.query('SELECT * FROM users');
    return res.rows;
  },

  // Fetch a single user by ID
  getUserById: async (id) => {
    const res = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.rows[0]; // returns the first matched user
  },

  // Create a new user
  createUser: async (username, email,password) => {
    const res = await db.query('INSERT INTO users (username, email,password) VALUES ($1, $2,$3) RETURNING *', [username, email,password]);
    return res.rows[0]; // returns the newly created user
  },
};

module.exports = userResolver;
