import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Router>
        {/* Render the Navbar component */}
        <Navbar />

        {/* Define the routes */}
        <Routes>
          {/* Route for the "Add" component */}
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>

        <Routes>
          {/* Route for the "Home" component */}
          <Route path="/Home" element={<Home />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
