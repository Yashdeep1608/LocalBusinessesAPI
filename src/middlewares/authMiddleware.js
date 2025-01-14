// src/middlewares/authMiddleware.js

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    // Verify token logic
    try {
      req.user = { id: 1, name: 'John Doe' }; // Example user after verification
      next();
    } catch (err) {
      res.status(403).json({ message: 'Invalid token' });
    }
  };
  
  module.exports = authMiddleware;
  