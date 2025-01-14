// src/middlewares/validateRequest.js

const validateRequest = (type) => (req, res, next) => {
    const errors = [];
    if (type === 'login') {
      if (!req.body.username) errors.push('Username is required');
      if (!req.body.password) errors.push('Password is required');
    } else if (type === 'register') {
      if (!req.body.username) errors.push('Username is required');
      if (!req.body.password) errors.push('Password is required');
      if (!req.body.email) errors.push('Email is required');
    }
  
    if (errors.length) {
      return res.status(400).json({ errors });
    }
    next();
  };
  
  module.exports = validateRequest;
  