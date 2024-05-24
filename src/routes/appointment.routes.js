const {Router} = require('express');
const router = Router();

// IMPORT CONTROLLER [AUTH]
const authController = require('../controller/authController');

// IMPORT CONTROLLER [PATIENT]
const appointmentController = require('../controller/appointmentController');

router.get('/appointments', authController.verifyToken, appointmentController.getAllAppointments); //GET ALL APPOINTMENTS


module.exports = router;