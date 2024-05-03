const { Router } = require('express');
const router = Router();

//IMPORT CONTROLLER [AUTH]
const authController = require('../controller/authController');

//IMPORT CONTROLLER [TEST]
const testController = require('../controller/testController');


router.get('/tests', authController.verifyToken, testController.getAllTets); // GET ALL TEST

router.post('/tests', authController.verifyToken, testController.createTest); // CREATE A TEST

router.get('/tests/:id', authController.verifyToken, testController.getTestById); // GET A TEST BY ID

router.put('/tests/:id', authController.verifyToken, testController.UpdateTest); // UPDATE A TEST

router.delete('/tests/:id', authController.verifyToken, testController.deleteTest); // DELETE A TEST

module.exports = router;