import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

function Main() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petmatching" element={<PetMatching />} />
        <Route path="/contact" element={<ContactUs />} />
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
    </>
  );
}

export default App;
