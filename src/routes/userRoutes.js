const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', verifyToken, userController.getProfile);

module.exports = router;