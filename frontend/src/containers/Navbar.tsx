import React from "react";
import UserDropDown from "../components/navbar/navbaricons/UserDropDown";
import NavSearchBar from "../components/navbar/searchbar/NavSearchBar";
import SettingsTab from "../components/navbar/navbaricons/SettingsTab";
import SignInTab from "../components/navbar/navbaricons/SignInTab";
import SignUpTab from "../components/navbar/navbaricons/SignUpTab";
import { useSelector } from "react-redux";
import { RootState } from "../state/store/store";

function Navbar() {
  const loggedIn = useSelector((state: RootState) => state.loggedIn.value);

  return (
    <header className="bg-slate-100 border border-bottom shadow-lg">
      <div className="flex flex-row justify-between items-center my-2 w-full mx-5">
        <div className="flex flex-row items-center gap-4">
          <div>
            <img src="/images/ChronoMD-Title.png" className="w-20 h-20" />
          </div>
          <h1 className="text-3xl">ChronoMD</h1>
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
