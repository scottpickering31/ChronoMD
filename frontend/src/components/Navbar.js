import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <header>
      <div className="">
        <Link to="/">
          <h1 className="text-5xl">Chrono MD</h1>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
