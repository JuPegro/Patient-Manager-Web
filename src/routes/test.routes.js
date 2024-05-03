const { Router } = require('express');
const router = Router();

//IMPORT CONTROLLER [AUTH]
const authController = require('../controller/authController');

//IMPORT CONTROLLER [TEST]
const testController = require('../controller/testController');


router.get('/tests', authController.verifyToken, testController.getAllTets); // GET ALL TEST



module.exports = router;