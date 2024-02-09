import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./containers/Navbar";
import Sidebar from "./containers/Sidebar";
import LandingPage from "./pages/landingpage/LandingPage";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);

  return (
    <div>
      <BrowserRouter>
        {loggedIn ? (
          <LandingPage />
        ) : (
          <div>
            <Navbar />
            <Sidebar />
          </div>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
