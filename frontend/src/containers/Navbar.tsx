import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <header className="bg-slate-500 w-full">
      <div className="flex flex-row justify-between items-center mx-3">
        <div>
          <Link to="/">
            <Routes>
              <Route
                path="/"
                element={<h1 className="text-xl">Chrono MD</h1>}
              />
            </Routes>
          </Link>
        </div>
        <div className="flex justify-end">
          <h1>user</h1>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
