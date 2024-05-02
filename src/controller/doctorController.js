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

// MIDDLEWARE CREATE NEW DOCTOR
exports.createDoctor = async (req, res, next) => {
  try {
    const { name, lastname, email, phone, card, picture } = req.body;

    // EMPTY FIELDS
    if (!name || !lastname || !email || !phone || !card || !picture) {
      return res.status(422).json({ message: "Empty Fields" });
    }

    // FOUND AN EXISTING USER WITH THE SAME USERNAME OR EMAIL
    const existingUser = await prisma.doctor.findFirst({
      where: {
        OR: [{ email: email }, { phone: phone }, { card: card }],
      },
    });

    // IF EXISTS RETURN ERROR
    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(401).json({ message: "Email already in use" });
      }
      if (existingUser.phone === phone) {
        return res.status(401).json({ message: "Phone already in use" });
      }
      if (existingUser.card === card) {
        return res.status(401).json({ message: "Card already in use" });
      }
    }

    const doctor = await prisma.doctor.create({
      data: {
        name: name,
        lastname: lastname,
        email: email,
        phone: phone,
        card: card,
        picture: picture,
      },
    });

    res.json({ message: "Successfully Created Doctor", doctor });
  } catch (err) {}
};

// MIDDLEWARE GET DOCTOR BY ID
exports.getDoctorById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(403).json({ message: "Id not provided" });
    }

    const doctor = await prisma.doctor.findFirst({ where: { id } });

    if (!doctor) {
      return res.status(404).json({ message: "Doctor not Found" });
    }

    return res
      .status(200)
      .json({ message: "Doctor found successfully", doctor });
  } catch (err) {
    console.error("Error fetching doctor:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// MIDDLEWARE UPDATE A DOCTOR
exports.updateDoctor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, lastname, email, phone, card, picture } = req.body;

    if (!id) {
      return res.status(401).json({ message: "Id not provided" });
    }

    if (!name || !lastname || !email || !phone || !card || !picture) {
      return res.status(401).json({ message: "Empty Fields" });
    }

    /* THIS IS LOOKING FOR A DOCTOR WHO HAS THE SAME VALUE 
      INTRODUCED IN THE BODY FOR THE FIELDS [EMAIL, PHONE, CARD]*/
    const uniqueFields = await prisma.doctor.findFirst({
      where: {
        NOT: { id: id }, // EXCLUDE CURRENT DOCTOR FROM SEARCH
        OR: [{ email: email }, { phone: phone }, { card: card }],
      },
    });

    // VALIDATE THAT THE UNIQUE FIELD IS NOT USED BY ANOTHER USER
    if (uniqueFields) {
      switch (true) {
        case uniqueFields.email === email:
          return res
            .status(401)
            .json({ message: "This email is being used by another Doctor" });
        case uniqueFields.phone === phone:
          return res
            .status(401)
            .json({ message: "This phone is being used by another Doctor" });
        case uniqueFields.card === card:
          return res
            .status(401)
            .json({ message: "This card is being used by another Doctor" });
        default:
          return res.status(401).json({ message: "Unexpected error" });
      }
    }

    const doctor = await prisma.doctor.update({
      where: { id },
      data: {
        name,
        lastname,
        email,
        phone,
        card,
        picture,
      },
    });

    return res
      .status(200)
      .json({ message: "Update doctor successfully", doctor });
  } catch (err) {
    console.log("Error updating doctor:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// MIDDLEWARE DELETE A DOCTOR
exports.deleteDoctor = async (req, res, next) => {
    try {
        const { id } = req.params;
    
        if (!id) {
          return res
            .status(401)
            .json({ message: "Id not provided" });
        }
    
        const doctor = await prisma.doctor.delete({ where: { id } });
    
        if (!doctor) {
          return res.status(404).json({ message: "User not Found!!" });
        }
    
        return res
          .status(200)
          .json({ message: "DoctorS deleted successfully", doctor });
      } catch (err) {
        console.error("Error fetching users:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
};
