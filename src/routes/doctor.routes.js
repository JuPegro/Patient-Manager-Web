const { Router } = require("express");
const router = Router();

//IMPORT MIDDLEWARES [AUTH]
const authController = require('../controller/authController');

//IMPORT MIDDLEWARES [DOCTOR]
const doctorController = require('../controller/doctorController');

router.get('/doctors', authController.verifyToken, doctorController.getAllDoctor) // GET ALL DOCTORS


module.exports = router;