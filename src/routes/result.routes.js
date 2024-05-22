const { Router } = require("express");
const router = Router();

//IMPORT CONTROLLER [AUTH]
const authController = require('../controller/authController');

//IMPORT CONTROLLER [RESULT]
const resultControllerController = require('../controller/resultController');

router.get('/results', authController.verifyToken, resultControllerController.getAllResultLab); // GET ALL RESULT

router.post('/results', authController.verifyToken, resultControllerController.createNewResults); // CREATE A RESULT

router.put('/results/:id', authController.verifyToken, resultControllerController.UpdateResultLab); // UPDATE A RESULT

/*router.get('/tests/:id', authController.verifyToken, resultControllerController.getTestById); // GET A RESULT BY ID


router.delete('/tests/:id', authController.verifyToken, resultControllerController.deleteTest); // DELETE A RESULT*/


module.exports = router;
