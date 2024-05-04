const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient();


// MIDDLEWARE GET ALL PATIENTS
exports.getAllPatient = async (req, res, next) => {
    try {
        const patient = await prisma.patient.findMany();

        // TABLE DONT HAVE RECORDS
        if(patient.length === 0){
            return res.status(404).json({message: "Patients not Found!"})
        }

        return res.status(200).json({totalPatient: patient.length, patient})
    }
    catch (err) {
        console.log({error: "error fetching Patients"});
        return res.status(500).json({message: "Internal server error"})
    }
}