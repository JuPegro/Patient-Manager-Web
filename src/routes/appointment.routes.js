const { Router } = require('express');
const router = Router();

// IMPORT CONTROLLER [AUTH]
const authController = require('../controller/authController');

// IMPORT CONTROLLER [PATIENT]
const appointmentController = require('../controller/appointmentController');

router.get('/appointments', authController.verifyToken, appointmentController.getAllAppointments); //GET ALL APPOINTMENTS

router.post('/appointments', authController.verifyToken, appointmentController.createAppointment); //CREATE AN APPOINTMENT

module.exports = router;