import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./containers/Navbar";
import Sidebar from "./containers/Sidebar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
