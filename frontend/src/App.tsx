import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
