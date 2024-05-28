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

    //IF FIELDS EMPTY
    if (!patientId || !doctorId || !date || !hour || !reason) {
      return res.status(401).json({ message: "Empty Fields" });
    }

    // FOUND AN EXISTING FOREING KEYS
    const patientExists = await prisma.patient.findUnique({
      where: { id: patientId },
    });

    // FOUND AN EXISTING FOREING KEYS
    const doctorExists = await prisma.doctor.findUnique({
      where: { id: doctorId },
    });

    //IF NOT FOUND FOREING KEY
    if (!patientExists) {
      return res.status(402).json({ message: "Patient ID does not exist" });
    }
    if (!doctorExists) {
      return res.status(402).json({ message: "Doctor ID does not exist" });
    }

    // CREATE APPOINTMENT
    const appointment = await prisma.appointment.create({
      data: {
        patientId: patientId,
        doctorId: doctorId,
        date: date,
        hour: hour,
        reason: reason,
      },
    });

    return res
      .status(200)
      .json({ message: "Succefully appointment created", appointment });
  } catch (err) {
    console.log({ error: "Error fetching Appointments", err });
    return res.status(500).json({ error: "Internal error server", err });
  }
};

//MIDDLEWARE GET AN APPOINTMENT
exports.getByIdAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;

    // IF ID NOT PROVIDED
    if (!id) {
      return res.status(403).json({ message: "Id not provided" });
    }

    const appointment = await prisma.appointment.findFirst({ where: { id } });

    // IF NOT FOUND APPOINTMENT
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not Found" });
    }

    return res
      .status(200)
      .json({ message: "Appointment found successfully", appointment });
  } catch (err) {
    console.log({ message: "Error fetching Appointment" });
    return res.status(500).json({ error: "Internal server error" });
  }
};

// MIDDLEWARE UPDATE AN APPOINTMETN
exports.updateAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { patientId, doctorId, date, hour, reason } = req.body;

    // IF ID NOT PROVIDED
    if (!id) {
      return res.status(403).json({ message: "Id not provided" });
    }

    // IF FIELDS EMPTY
    if (!patientId || !doctorId || !date || !hour || !reason) {
      return res.status(401).json({ message: "Empty Fields" });
    }

    // UPDATE APPOINTMENT
    const appointment = await prisma.appointment.update({
      where: { id },
      data: {
        patientId: patientId,
        doctorId: doctorId,
        date: date,
        hour: hour,
        reason: reason,
      },
    });

    return res.status(200).json({message: "Succefully update appointment", appointment});
  } catch (err) {
    console.log({ message: "Error fetching Appointment" });
    return res.status(500).json({ error: "Internal server error" });
  }
};
