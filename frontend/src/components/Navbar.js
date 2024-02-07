import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import React from "react";

function Navbar() {
  return (
    <header>
      <div className="text-center -z-10 bg-slate-500">
        <Link to="/">
          <h1 className="text-5xl">Chrono MD</h1>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
