const { PrismaClient } = require("@prisma/client");

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
