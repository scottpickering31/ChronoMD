import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from "react";
import UserDropDown from "../components/navbar/navbaricons/UserDropDown";
import NavSearchBar from "../components/navbar/searchbar/NavSearchBar";
import SettingsTab from "../components/navbar/navbaricons/SettingsTab";
import SignInTab from "../components/navbar/navbaricons/SignInTab";
import SignUpTab from "../components/navbar/navbaricons/SignUpTab";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../state/store/store";

function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const loggedIn = useSelector((state: RootState) => state.loggedIn.value);
  return (
    <header className="bg-slate-100 border border-bottom shadow-lg">
      <div className="flex flex-row justify-between items-center my-2 w-full mx-5">
        <div>
          <Link to="/">
            <Routes>
              <Route
                path="/"
                element={<h1 className="text-xl">Chrono MD</h1>}
              />
            </Routes>
          </Link>
        </div>
        <div>
          <NavSearchBar />
        </div>
        <div className="flex flex-row items-center gap-3">
          <div>
            <SettingsTab />
          </div>
          {!loggedIn && (
            <div className="flex flex-row items-center mx-5 gap-5">
              <div>
                <SignInTab />
              </div>
              <div>
                <SignUpTab />
              </div>
            </div>
          )}
          {loggedIn && (
            <div className="flex justify-end cursor-pointer mr-5">
              <UserDropDown />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
