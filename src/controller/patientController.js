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
    const {name, lastname, phone, address, card, birthday, picture, smoke, allergies} = req.body

    // EMPTY FIELDS
    if(!name || !lastname || !phone || !address || !card || !birthday || !picture || !smoke || !allergies){
        return res.status(401).json({message: "Empty Fields!"})
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
            name, lastname, phone, card, address, birthday, picture, smoke, allergies
        }
    })
    
    return res.status(200).json({message: "Successfully Created Patient", patient});

  } catch (err) {
    console.log({ error: "error create Patients", err });
    return res.status(500).json({ message: "Internal server error", err });
  }
};
