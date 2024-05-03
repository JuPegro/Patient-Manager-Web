const { Router } = require('express');
const router = Router();

//IMPORT CONTROLLER [AUTH]
const authController = require('../controller/authController');

//IMPORT CONTROLLER [TEST]
const testController = require('../controller/testController');


router.get('/tests', authController.verifyToken, testController.getAllTets); // GET ALL TEST

router.post('/tests', authController.verifyToken, testController.createTest); // CREATE A TEST

router.get('/tests/:id', authController.verifyToken, testController.getTestById); // GET A TEST BY ID

module.exports = router;