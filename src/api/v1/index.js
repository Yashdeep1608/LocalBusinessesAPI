// src/api/v1/index.js

const express = require('express');
const authRoutes = require('./routes/AuthRoutes');
const accountRoutes = require('./routes/AccountRoutes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/account', accountRoutes);

module.exports = router;
