// src/api/v1/routes/authenticateRoutes.js

const express = require('express');
const authController = require('../controllers/AuthController');
const validateRequest = require('../../middlewares/validateRequest');

const router = express.Router();

router.post('/login', validateRequest('login'), authController.login);
router.post('/register', validateRequest('register'), authController.register);

module.exports = router;
