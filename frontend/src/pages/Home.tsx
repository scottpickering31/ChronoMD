import React from "react";
import Navbar from "../containers/Navbar.tsx";

function Home() {
  return (
    <div>
      <div className="fixed w-full">
        <Navbar />
      </div>
      <div>
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
