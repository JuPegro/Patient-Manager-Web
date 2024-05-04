const { Router } = require("express");
const router = Router();

// IMPORT CONTROLLER [AUTH]
const authController = require('../controller/authController');

// IMPORT CONTROLLER [PATIENT]
const patientController = require('../controller/patientController');

router.get('/patients', authController.verifyToken, patientController.getAllPatient); // GET ALL PATIENT


module.exports = router;
