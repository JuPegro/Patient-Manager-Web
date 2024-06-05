import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import { NavBar } from "./components/NavBar";
import "./app.css";
import { Box } from "@mui/material";
import { DashboardPage } from "./pages/DashboardPage";
import { UserPage } from "./pages/UserPage";

const App = () => {
  return (
    <Router>
      <div id="main">
        <SideBar />
        <Box id="__root" sx={{ padding: 0 }}>
          <NavBar />
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/users" element={<UserPage />} />
          </Routes>
        </Box>
      </div>
    </Router>
  );
};

export default App;
