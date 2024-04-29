const { Router } = require('express');
const router = Router();

// IMPORT CONTROLLER [USER]
const userController = require('../controller/userController');

// IMPORT CONTROLLER [AUTH] PROTECTED ROUTES
const authController = require('../controller/authController');

router.get('/users', authController.verifyToken, userController.getAllUser); // GET ALL USERS

router.post('/users', authController.verifyToken, userController.createUser); // CREATE USERS

router.get('/users/:id', authController.verifyToken, userController.getUserById); // GET AN USER

router.put('/users/:id', authController.verifyToken, userController.updateUser); // UPDATE AN USER

router.delete('/users/:id', authController.verifyToken, userController.deleteUser); // DELETE AN USER

module.exports = router;
