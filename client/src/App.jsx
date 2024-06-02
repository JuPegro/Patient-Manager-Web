import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import { NavBar } from "./components/NavBar";
import "./app.css";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Router>
      <div id="main">
        <SideBar />
        <Box id="__root" sx={{ padding: 0 }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<h1>Aun Nada</h1>} />
            <Route path="/auth/signup" element={<h2>Nada</h2>} />
          </Routes>
        </Box>
      </div>
    </Router>
  );
};

export default App;
