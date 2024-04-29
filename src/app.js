const express = require("express");
const app = express();
const dotenv = require("dotenv");

// ⚡ SEE THE ENVIROMENT VARIABLES ⚡
dotenv.config();

// ⚡ IMPORT ROUTES ⚡
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

// ⚡ SERVER READ FILES JSON ⚡
app.use(express.json());

// ⚡ SERVER READ DATA FROM FORMS ⚡
app.use(express.urlencoded({ extended: true }));

// ⚡ SET ROUTES ⚡
app.use("/auth", authRoutes);
app.use(userRoutes);

module.exports = app;
