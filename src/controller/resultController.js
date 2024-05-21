const { PrismaClient } = require("@prisma/client");
const { forEach } = require("lodash");

const prisma = new PrismaClient();

// MIDDLEWARE GET ALL RESULT
exports.getAllResultLab = async (req, res, next) => {
  try {
    const resultLab = await prisma.result.findMany();

    if (resultLab.length === 0) {
      return res.status(404).json({ message: "Results Lab not Found!" });
    }

    return res.status(200).json({ totalResult: resultLab.length, resultLab });
  } catch (err) {
    console.log({ error: "Error fetching Result Lab:", err });
    return res.status(500).json({ error: "Internal server error" });
  }
};

// MIDDLEWARE CREATE NEWS LABS TEST
exports.createNewResults = async (req, res, next) => {
  try {
    const { patientId, appointmentId, testIds } = req.body;


    // IF INPUT EMPTY
    if (!patientId || !appointmentId || !Array.isArray(testIds) || testIds.length === 0) {
      return res.status(401).json({ message: "Empty Fields" });
    }

    const resultData = testIds.map(testId => ({
      patientId: patientId,
      appointmentId: appointmentId,
      testId: testId
    }));

    // FOUND AN EXISTING FOREING KEYS
    const patientExists = await prisma.patient.findUnique({where: {id: patientId}});

    // FOUND AN EXISTING FOREING KEYS
    const appointmentExists = await prisma.appointment.findUnique({where: {id: appointmentId}});

    //IF NOT FOUND FOREING KEY
    if (!patientExists) {
      return res.status(402).json({message: "Patient ID does not exist"})
    }
    if (!appointmentExists) {
      return res.status(402).json({message: "Appointment ID does not exist"})
    }

    // VALIDATE THAT ALL TEST IDS EXIST
    testIds.forEach(async(testId) => {

      const testExists = await prisma.test.findFirst({where: {id: testId}});

      if (!testExists) {
        console.log(testId)
        return res.status(402).json({message: "Test ID does not exist", invalid: testId})
      }
    });

    const resultLabs = await prisma.result.createMany({
      data: resultData,
      skipDuplicates: true //SKIP DUPLICATES
    })

    return res.status(200).json({message: "result Lab created", resultLabs, data: resultData});


  } catch (err) {
    console.log({ error: "Error creating Results Lab:", err });
    return res.status(500).json({ error: "Internal server error" });
  }
};
