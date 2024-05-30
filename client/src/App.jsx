import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Hello World!</div>} />
      </Routes>
    </Router>
  );
};

export default App;
