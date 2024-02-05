import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <header>
      <div className="flex items-center justify-between p-4">
        <Link to="/">
          <h1 className="text-5xl">Chrono MD</h1>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
