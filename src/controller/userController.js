const _ = require("lodash");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// ENVIROMENT VARIABLES
const saltRounds = process.env.SALT;

// MIDDLEWARE GET ALL USERS
exports.getAllUser = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();

    if (users.length === 0) {
      return res.status(401).json("No user found");
    }

    return res.status(200).json({ totalUsers: users.length, users });
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// MIDDLEWARE GET AN USER BY ID
exports.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(403).json({ message: "Id not provided" });
    }

    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) {
      return res.status(404).json({ message: "User not Found" });
    }

    // OMIT THE [PASSWORD] USER IN RES
    const userWithoutPassword = _.omit(user, "password");
    return res
      .status(200)
      .json({ Message: "User found successfully", userWithoutPassword });
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// MIDDLEWARE UPDATE AN USER
exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, lastname, email, username, password, picture, role, status } =
      req.body;

    // CHECK IF THE PROVIDED DATA IS VALID
    if (
      !name ||
      !lastname ||
      !email ||
      !username ||
      !password ||
      !picture ||
      !role ||
      !status
    ) {
      return res
        .status(401)
        .json({ message: "Please provide all the necessary data." });
    }

    // ENCRYPT THE PASSWORD USER
    const hashedPassword = await bcrypt.hash(password, parseInt(saltRounds));

    const user = await prisma.user.update({
      where: { id },
      data: {
        name,
        lastname,
        email,
        username,
        password: hashedPassword,
        picture,
        role,
        status,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not Found!!" });
    }

    // OMIT PASSWORD WHEN RETURNING THE RES
    const userWithoutPassword = _.omit(user, "password");

    return res
      .status(200)
      .json({ message: "User update successfully", userWithoutPassword });
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// MIDDLEWARE FOR DELETE AN USER
exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res
        .status(401)
        .json({ message: "Please provide all the necessary data." });
    }

    const user = await prisma.user.delete({ where: { id } });

    if (!user) {
      return res.status(404).json({ message: "User not Found!!" });
    }

    return res
      .status(200)
      .json({ message: "User deleted successfully", user });
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// MIDDLEWARE FOR CREATE A NEW USER
exports.createUser = async (req, res, next) => {
  const { name, lastname, username, email, password, picture } = req.body;

  // EMPTY FIELDS
  if (!name || !lastname || !username || !email || !password || !picture) {
    return res.status(422).json({ message: "Empty Fields" });
  }

  // FOUND AN EXISTING USER WITH THE SAME USERNAME OR EMAIL
  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [{ username: username }, { email: email }],
    },
  });

  // IF EXISTS RETURN ERROR
  if (existingUser) {
    if (existingUser.username === username) {
      return res.status(401).json({ message: "Username already in use" });
    }
    if (existingUser.email === email) {
      return res.status(401).json({ message: "Email already in use" });
    }
  }
}