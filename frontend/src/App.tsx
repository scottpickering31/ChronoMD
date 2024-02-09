import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./containers/Navbar";
import Sidebar from "./containers/Sidebar";
import LandingPage from "./pages/landingpage/LandingPage";
import { RootState } from "../src/state/store/store";
import { useSelector } from "react-redux";

function App() {
  const loggedIn = useSelector((state: RootState) => state.loggedIn.value);
  return (
    <div>
      <BrowserRouter>
        {!loggedIn ? (
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
