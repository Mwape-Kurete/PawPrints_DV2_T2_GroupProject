import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import PetMatching from "./routes/PetMatching/PetMatching";
import ContactUs from "./routes/ContactUs/ContactUs";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />{" "}
          <Route path="/petmatching" element={PetMatching} />
          <Route path="/contact" element={ContactUs} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
