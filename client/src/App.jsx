import React from "react";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import './app.css'

const App = () => {
  return (
    <Router>
      <div id="main">
        <SideBar />
        <Container>
          <Routes>
            <Route path="/" element={<h1>Aun Nada</h1>} />
            <Route path="/auth/signup" element={<h2>Nada</h2>}/>
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;
