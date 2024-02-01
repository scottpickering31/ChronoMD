import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Chrono MD</h1>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
