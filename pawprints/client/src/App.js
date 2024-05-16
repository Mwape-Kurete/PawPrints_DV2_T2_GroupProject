<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
=======
import logo from './logo.svg';
import './App.css';
>>>>>>> parent of 8e91de0 (navbar-completed)

import Navbar from "./components/Navbar/Navbar";

import Home from "./routes/Home/Home";
import PetMatching from "./routes/PetMatching/PetMatching";
import ContactUs from "./routes/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petmatching" element={<PetMatching />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> parent of 8e91de0 (navbar-completed)
    </div>
  );
}

export default App;
