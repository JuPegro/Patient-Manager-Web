const _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// MIDDLEWARE FOR LOGIN USER
const secretKey = process.env.JWT_SECRET_KEY;
const expireKey = process.env.EXPIRE_IN_TOKEN;
const saltRounds = process.env.SALT;

// MIDDLEWARE FOR LOGIN USER
exports.SignIn = async (req, res, next) => {
  const { username, password } = req.body;

  // EMPTY FIELDS
  if (!username || !password) {
    return res.status(422).json({ message: "Empty Fields" });
  }

  // SEARCH USER FOR USERNAME
  const user = await prisma.user.findUnique({ where: { username } });

  // FOUND THE USER
  if (!user) {
    return res.status(404).json({ message: "User Not Found!" });
  }

  // ENCRYPT THE [PASSWORD] PASSED BY THE USER
  const isPasswordValid = await bcrypt.compare(password, user.password);

  // INCORRECT PASSWORD
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }

  // SET JWT FOR USER
  const token = jwt.sign({ Id: user.id }, secretKey, { expiresIn: expireKey });
  res.status(200).json({ auth: true, token, user });
};

// --------------------------------------------------!

// MIDDLEWARE FOR CREATE A NEW USER
exports.SignUp = async (req, res, next) => {
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

  // ENCRYPT PASSWORD
  const hashedPassword = await bcrypt.hash(password, parseInt(saltRounds));

  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      lastname: lastname,
      password: hashedPassword,
      username: username,
      picture: picture,
    },
  });

  res.json({ message: "Successfully Created User", user });
};

// --------------------------------------------------!

// MIDDLEWARE PROTECTED ROUTES AUTHORIZED
exports.verifyToken = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ message: "Token not provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid Token" });
    }

    // SAVE TOKEN WITH USER DATA IN REQUEST [id]
    req.id = decoded.Id;
    next();
  });
};

exports.Profile = async (req, res, next) => {
  //  GET THE ID FROM THE REQ.ID [verifyToken]
  const user = await prisma.user.findUnique({ where: { id: req.id } });

  if (!user) {
    return res.status(404).json({ message: "User Not Found" });
  }

  // [_.omit] RETURN ONLY NECESSARY INFOMATION
  const userWithoutPassword = _.omit(user, "password");
  return res.json({ user: userWithoutPassword });
};
