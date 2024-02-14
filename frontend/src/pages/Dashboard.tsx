// Dashboard.tsx
import React, { useEffect } from "react";
import Navbar from "../containers/Navbar";
import Sidebar from "../containers/Sidebar";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../state/reducers/LoggedInSlice";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoggedIn(true));
    return () => {
      dispatch(setLoggedIn(false));
    };
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default Dashboard;
