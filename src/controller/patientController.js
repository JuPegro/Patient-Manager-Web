const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// MIDDLEWARE GET ALL PATIENTS
exports.getAllPatient = async (req, res, next) => {
  try {
    const patient = await prisma.patient.findMany();

    // TABLE DONT HAVE RECORDS
    if (patient.length === 0) {
      return res.status(404).json({ message: "Patients not Found!" });
    }

    return res.status(200).json({ totalPatient: patient.length, patient });
  } catch (err) {
    console.log({ error: "error fetching Patients" });
    return res.status(500).json({ message: "Internal server error" });
  }
};

// MIDDLEWARE CREATE A PATIENT
exports.createPatient = async (req, res, next) => {
  try {
    const {
      name,
      lastname,
      phone,
      address,
      card,
      birthday,
      picture,
      smoke,
      allergies,
    } = req.body;

    // EMPTY FIELDS
    if (
      !name ||
      !lastname ||
      !phone ||
      !address ||
      !card ||
      !birthday ||
      !picture ||
      typeof smoke === "undefined" ||
      typeof allergies === "undefined"
    ) {
      return res.status(401).json({ message: "Empty Fields!" });
    }

    // FOUND AN EXISTING PATIENT WITH THE SAME PHONE OR CARD
    const existing = await prisma.patient.findFirst({
      where: {
        OR: [{ phone: phone }, { card: card }],
      },
    });

    // IF EXISTS RETURN ERROR
    if (existing) {
      if (existing.phone === phone) {
        return res.status(401).json({ message: "Phone already in use" });
      }
      if (existing.card === card) {
        return res.status(401).json({ message: "Card already in use" });
      }
    }

    const patient = await prisma.patient.create({
      data: {
        name,
        lastname,
        phone,
        card,
        address,
        birthday,
        picture,
        smoke,
        allergies,
      },
    });

    return res
      .status(200)
      .json({ message: "Successfully Created Patient", patient });
  } catch (err) {
    console.log({ error: "error create Patients", err });
    return res.status(500).json({ message: "Internal server error", err });
  }
};

// MIDDLEWARE UPDATE A PATIENT
exports.updatePatient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      name,
      lastname,
      phone,
      address,
      card,
      birthday,
      picture,
      smoke,
      allergies,
    } = req.body;

    // EMPTY FIELDS
    if (
      !name ||
      !lastname ||
      !phone ||
      !address ||
      !card ||
      !birthday ||
      !picture ||
      typeof smoke === "undefined" ||
      typeof allergies === "undefined"
    ) {
      return res.status(401).json({ message: "Empty Fields!" });
    }

    // EXISTING OTHER PATIENT USE FIELDS [PHONE, CARD]
    const existing = await prisma.patient.findFirst({
      where: {
        OR: [{ phone: phone }, { card: card }],
        NOT: { id },
      },
    });

    if (existing) {
      if (existing.phone === phone) {
        return res.status(401).json({ message: "Phone already in use" });
      }
      if (existing.card === card) {
        return res.status(401).json({ message: "Card already in use" });
      }
    }

    const patient = await prisma.patient.update({
      where: { id },
      data: {
        name,
        lastname,
        phone,
        card,
        address,
        birthday,
        picture,
        smoke,
        allergies,
      },
    });

    return res
      .status(200)
      .json({ message: "Successfully update Patient", patient });
  } catch (err) {
    console.log({ error: "error updating Patient", err });
    return res.status(500).json({ message: "Internal server error", err });
  }
};

// MIDDLEWARE GET BY ID PATIENT
exports.getPatientById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // IF DONT PROVIDED ID
    if (!id) {
      return res.status(401).json({ message: "Id not provided" });
    }

    const patient = await prisma.patient.findUnique({ where: { id } });

    // IF NOT FOUND 
    if(!patient) {
        return res.status(404).json({ message: "Patient not Found!" });
    }

    return res.status(200).json({ message: "Successfully Found Patient", patient });
  } catch (err) {
    console.log({ error: "error fetching Patients" });
    return res.status(500).json({ message: "Internal server error" });
  }
};
