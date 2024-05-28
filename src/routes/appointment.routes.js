const { Router } = require('express');
const router = Router();

// IMPORT CONTROLLER [AUTH]
const authController = require('../controller/authController');

// IMPORT CONTROLLER [PATIENT]
const appointmentController = require('../controller/appointmentController');

router.get('/appointments', authController.verifyToken, appointmentController.getAllAppointments); //GET ALL APPOINTMENTS

router.post('/appointments', authController.verifyToken, appointmentController.createAppointment); //CREATE AN APPOINTMENT

router.get('/appointments/:id', authController.verifyToken, appointmentController.getByIdAppointment); //GET BY ID AN APPOINTMENT

router.put('/appointments/:id', authController.verifyToken, appointmentController.updateAppointment); //UPDATE AN APPOINTMENT

router.delete('/appointments/:id', authController.verifyToken, appointmentController.deleteAppointment); //UPDATE AN APPOINTMENT

module.exports = router;