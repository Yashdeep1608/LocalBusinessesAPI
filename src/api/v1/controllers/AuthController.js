// src/api/v1/controllers/authenticateController.js
const ResponseHelper = require('../utils/ResponseHelper');
const AuthController = {
    login: async (req, res) => {
        try {
            const { username, password } = req.body;
            if (username === 'admin' && password === 'password') {
              return ResponseHelper.Success(res, { token: 'dummy-token' }, 'Login successful');
            }
            return ResponseHelper.BadRequest(res, 'Invalid credentials');
          } catch (err) {
            return ResponseHelper.ServerError(res, 'An error occurred', err.message);
          }
    },
  
    register: async (req, res) => {
        try {
            const { username, password, email } = req.body;
            // Simulate registration logic
            return ResponseHelper.Success(res, { username, email }, 'User registered successfully');
          } catch (err) {
            return ResponseHelper.ServerError(res, 'An error occurred', err.message);
          }
        },
  };
  
  module.exports = AuthController;
  