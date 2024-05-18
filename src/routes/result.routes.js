const { Router } = require("express");
const router = Router();

//IMPORT CONTROLLER [AUTH]
const authController = require('../controller/authController');

//IMPORT CONTROLLER [RESULT]
const resultControllerController = require('../controller/resultController');

/*router.get('/tests', authController.verifyToken, resultControllerController.getAllTets); // GET ALL RESULT

router.post('/tests', authController.verifyToken, resultControllerController.createTest); // CREATE A RESULT

router.get('/tests/:id', authController.verifyToken, resultControllerController.getTestById); // GET A RESULT BY ID

router.put('/tests/:id', authController.verifyToken, resultControllerController.UpdateTest); // UPDATE A RESULT

router.delete('/tests/:id', authController.verifyToken, resultControllerController.deleteTest); // DELETE A RESULT*/


module.exports = router;
