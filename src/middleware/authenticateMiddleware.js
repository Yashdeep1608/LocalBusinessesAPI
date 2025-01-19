const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const token = req.headers['authorization'];

  // Check if the request allows anonymous access
  const isAnonymous = req.body && req.body.operationName === 'AnonymousOperation'; // Customize this based on your needs

  if (isAnonymous) {
    return next(); // Skip authentication for anonymous operations
  }

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Forbidden' });
      }
      req.user = user;
      next();
    });
  } else {
    return next(); 
  }
};

module.exports = authenticateJWT;
