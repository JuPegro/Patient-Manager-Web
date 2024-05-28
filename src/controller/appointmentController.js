const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//MIDDLEWARE GET ALL APPOINTMENTS
exports.getAllAppointments = async (req, res, next) => {
  try {
    //FETCHING DATA TABLE [APPOINTMENT]
    const appointment = await prisma.appointment.findMany();

    //IF DON'T HAVE APPOINTMENT
    if (appointment.length === 0) {
      return res.status(404).json({ message: "Appointments not found!" });
    }

    return res
      .status(200)
      .json({ totalAppointment: appointment.length, appointment });
  } catch (err) {
    console.log({ error: "Error fetching Appointments", err });
    return res.status(500).json({ error: "Internal error server", err });
  }
};

//MIDDLEWARE CREATE AN APPOINTMENT APPOINTMENTS
exports.createAppointment = async (req, res, next) => {
  try {
    const { patientId, doctorId, date, hour, reason } = req.body;
  } catch (err) {
    console.log({ error: "Error fetching Appointments", err });
    return res.status(500).json({ error: "Internal error server", err });
  }
};
