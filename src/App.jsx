// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PlantID from "./pages/PlantID";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/plantid">PlantId</Link>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/plantid" element={<PlantID/>} />
      </Routes>
    </Router>
  );
}
