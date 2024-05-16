import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from "./components/Navbar/Navbar";
import VerticalNav from "./components/VerticalNav";
import Home from "./routes/Home/Home";
import PetMatching from "./routes/PetMatching/PetMatching";
import ContactUs from "./routes/ContactUs/ContactUs";
import AdminHome from "./routes/Admin/AdminHome";
import Approvals from "./routes/Admin/Approvals";
import Users from "./routes/Admin/Users";
import Auth from "./components/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/petmatching" element={<PetMatching />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin/*" element={
            <div className="admin-container">
              <VerticalNav />
              <Routes>
                <Route path="home" element={<AdminHome />} />
                <Route path="approvals" element={<Approvals />} />
                <Route path="users" element={<Users />} />
              </Routes>
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
