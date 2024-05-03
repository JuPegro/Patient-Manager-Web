const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.getAllTets = async (req, res, next) => {
    try {
        const test = await prisma.test.findMany();

        if(test.length === 0){
            return res.status(404).json({message: "Test not Found!"})
        }

        return res.status(200).json({totalTest: test.length, test})
        
    }
    catch (err) {
        console.log({error: "Error fetching Tests:", err});
        return res.status(500).json({error: "Internal server error"})
    }
};
