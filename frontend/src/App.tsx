import React from "react";
import Home from "./pages/Home";
import { RootState } from "../src/state/store/store";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";

function App() {
  const loggedIn = useSelector((state: RootState) => state.loggedIn.value);
  return (
    <div>
      {!loggedIn ? (
        <Home />
      ) : (
        <div>
          <Dashboard />
        </div>
      )}
    </div>
  );
}

export default App;
