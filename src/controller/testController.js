const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// MIDDLEWARE GET ALL TEST
exports.getAllTets = async (req, res, next) => {
  try {
    const test = await prisma.test.findMany();

    if (test.length === 0) {
      return res.status(404).json({ message: "Test not Found!" });
    }

    return res.status(200).json({ totalTest: test.length, test });
  } catch (err) {
    console.log({ error: "Error fetching Tests:", err });
    return res.status(500).json({ error: "Internal server error" });
  }
};

// MIDDLEWARE CREATE NEW TEST
exports.createTest = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(401).json({ message: "Empty Fields" });
    }

    // FOUND AN EXISTING TEST WITH THE SAME NAME
    const existingTest = await prisma.test.findFirst({
      where: {
        OR: [{ name: name }],
      },
    });

    if (existingTest) {
      return res.status(401).json({ message: "Test already in use" });
    }

    const test = await prisma.test.create({
      data: {
        name,
      },
    });

    return res
      .status(200)
      .json({ message: "Successfully Created Doctor", test });
  } catch (err) {
    console.log({ error: "Error created Tests:", err });
    return res.status(500).json({ error: "Internal server error" });
  }
};

// MIDDLEWARE GET A TEST
exports.getTestById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ message: "Id not provided!" });
    }

    const test = await prisma.test.findFirst({ where: { id } });

    if (!test) {
      return res.status(404).json({ message: "Test not Found!" });
    }

    return res.status(200).json({ message: "Test found successfully", test });
  } catch (err) {
    console.log({ error: "Error fetching Tests:", err });
    return res.status(500).json({ error: "Internal server error" });
  }
};

// MIDDLEWARE UPDATE A TEST
exports.UpdateTest = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, status } = req.body;

    if (!id) {
      return res.status(401).json({ message: "Id not provided!" });
    }

    if (!name || !status) {
      return res.status(401).json({ message: "Empty Fields" });
    }

    /* THIS IS LOOKING FOR A DOCTOR WHO HAS THE SAME VALUE 
      INTRODUCED IN THE BODY FOR THE FIELDS [NAME]*/
    const uniqueFields = await prisma.test.findFirst({
      where: {
        NOT: { id: id }, // EXCLUDE CURRENT TEST FROM SEARCH
        OR: [{ name: name }],
      },
    });

    if (uniqueFields) {
      return res
        .status(401)
        .json({ message: "This name is being used by another Test" });
    }

    const test = await prisma.test.update({
      where: { id },
      data: {
        name,
        status,
      },
    });

    return res.status(200).json({ message: "Update test successfully", test });
  } catch (err) {
    console.log({ error: "Error fetching Tests:", err });
    return res.status(500).json({ error: "Internal server error" });
  }
};

// MIDDLEWARE DELETE A TEST
exports.deleteTest = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(401).json({ message: "Id not provided!" });
    }

    const test = await prisma.test.delete({ where: { id } });

    if (!test) {
      return res.status(404).json({ message: "Test not Found!!" });
    }

    return res
      .status(200)
      .json({ message: "Test deleted successfully", test });
  } catch (err) {
    console.log({ error: "Error deleted Tests:", err });
    return res.status(500).json({ error: "Internal server error" });
  }
};
