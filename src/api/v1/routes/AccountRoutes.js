// src/api/v1/routes/accountRoutes.js

const express = require('express');
const accountController = require('../controllers/AccountController');
const authMiddleware = require('../../middlewares/authMiddleware');

const router = express.Router();

router.get('/profile', authMiddleware, accountController.getProfile);
router.put('/profile', authMiddleware, accountController.updateProfile);

module.exports = router;
