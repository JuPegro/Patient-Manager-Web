const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// MIDDLEWARE GET ALL DOCTORS
exports.getAllDoctor = async (req, res, next) => {
    try {
        const doctor = await prisma.doctor.findMany();
    
        if (doctor.length === 0) {
          return res.status(401).json("No doctors found");
        }
    
        return res.status(200).json({ totalDoctors: doctor.length, doctor });
      } catch (err) {
        console.error("Error fetching doctors:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
};
