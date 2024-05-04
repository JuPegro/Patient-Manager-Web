const { Router } = require("express");
const router = Router();

// IMPORT CONTROLLER [AUTH]
const authController = require('../controller/authController');

// IMPORT CONTROLLER [PATIENT]
const patientController = require('../controller/patientController');

router.get('/patients', authController.verifyToken, patientController.getAllPatient); // GET ALL PATIENT

router.post('/patients', authController.verifyToken, patientController.createPatient); // CREATE A PATIENT

router.put('/patients/:id', authController.verifyToken, patientController.updatePatient); // UPDATE A PATIENT

router.get('/patients/:id', authController.verifyToken, patientController.getPatientById); // GET BY ID A PATIENT

router.delete('/patients/:id', authController.verifyToken, patientController.deletePatient); // DELETE A PATIENT


module.exports = router;
