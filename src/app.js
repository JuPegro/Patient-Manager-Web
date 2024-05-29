const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require('morgan');
const cors = require('cors');

// ⚡ SEE THE ENVIROMENT VARIABLES ⚡
dotenv.config();

// ⚡ IMPORT ROUTES ⚡
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const testRoutes = require("./routes/test.routes");
const doctorRoutes = require("./routes/doctor.routes");
const patientRoutes = require("./routes/patient.routes");
const resultLabRoutes = require("./routes/result.routes");
const appointmentRoutes = require("./routes/appointment.routes");

// ⚡ SERVER READ FILES JSON ⚡
app.use(express.json());

// ⚡ SERVER READ DATA FROM FORMS ⚡
app.use(express.urlencoded({ extended: true }));

// ⚡SET CORS⚡
app.use(cors());

// ⚡SET MORGAN⚡
app.use(morgan("dev"));

// ⚡ SET ROUTES ⚡
app.use("/auth", authRoutes);
app.use(userRoutes);
app.use(testRoutes);
app.use(doctorRoutes);
app.use(patientRoutes);
app.use(resultLabRoutes);
app.use(appointmentRoutes);

module.exports = app;
