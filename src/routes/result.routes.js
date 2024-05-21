const { Router } = require("express");
const router = Router();

//IMPORT CONTROLLER [AUTH]
const authController = require('../controller/authController');

//IMPORT CONTROLLER [RESULT]
const resultControllerController = require('../controller/resultController');

router.get('/results', authController.verifyToken, resultControllerController.getAllResultLab); // GET ALL RESULT

router.post('/results', authController.verifyToken, resultControllerController.createNewResults); // CREATE A RESULT

/*router.get('/tests/:id', authController.verifyToken, resultControllerController.getTestById); // GET A RESULT BY ID

router.put('/tests/:id', authController.verifyToken, resultControllerController.UpdateTest); // UPDATE A RESULT

router.delete('/tests/:id', authController.verifyToken, resultControllerController.deleteTest); // DELETE A RESULT*/


module.exports = router;
