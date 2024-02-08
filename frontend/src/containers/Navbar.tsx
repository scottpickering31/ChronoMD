import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from "react";
import UserDropDown from "../components/Navbar/UserDropDown";
import NavSearchBar from "../components/Navbar/NavSearchBar";

function Navbar() {
  return (
    <header className="bg-slate-100 w-full border border-bottom shadow-lg">
      <div className="flex flex-row justify-between items-center mx-3 my-2">
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
        <div>
          <NavSearchBar />
        </div>
        <div className="flex justify-end">
          <UserDropDown />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
