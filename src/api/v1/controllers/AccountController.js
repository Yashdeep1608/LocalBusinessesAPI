// src/api/v1/controllers/accountController.js
const ResponseHelper = require('../utils/ResponseHelper');
const AccountController = {
    getProfile: async (req, res) => {
        try {
            if (!req.user) {
              return ResponseHelper.Unauthorized(res, 'Unauthorized access');
            }
            return ResponseHelper.Success(res, req.user, 'Profile retrieved successfully');
          } catch (err) {
            return ResponseHelper.ServerError(res, 'An error occurred', err.message);
          }
    },
  
    updateProfile: async (req, res) => {
        try {
            const { name, email } = req.body;
            if (!name || !email) {
              return ResponseHelper.BadRequest(res, 'Name and email are required');
            }
            // Simulate profile update logic
            return ResponseHelper.Success(res, { name, email }, 'Profile updated successfully');
          } catch (err) {
            return ResponseHelper.ServerError(res, 'An error occurred', err.message);
          }
        },
  };
  
  module.exports = AccountController;
  