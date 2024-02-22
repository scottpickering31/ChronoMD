import React from "react";
import AccountDetails from "../containers/AccountDetails";

function AccountPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-tiny absolute top-0 -z-10 left-0 h-screen bg-slate-100 flex justify-evenly flex-col text-center">
      <div>
        <h1>Profile</h1>
        <h2>Setting1</h2>
      </div>
      <div>
        <h1>Learning Platform</h1>
        <h2>Setting1</h2>
      </div>
      <div>
        <h1>Clinical Practice</h1>
        <h2>Setting1</h2>
        <h2>Setting2</h2>
      </div>
      <div>
        <h1>Medical Journals</h1>
        <h2>Setting1</h2>
        <h2>Setting2</h2>
      </div>
      <div>
        <h1>Library</h1>
        <h2>Setting1</h2>
        <h2>Setting2</h2>
      </div>
    </div>
    <div className="flex flex-col h-screen w-full justify-evenly items-center">
    <div className="text-center">
      <AccountDetails />
      </div>
      <div className="text-center">
      <AccountDetails />
      </div>
      <div className="text-center">
      <AccountDetails />
      </div>
      <div className="text-center">
      <AccountDetails />
      </div>
      </div>
    </div>
  );
}

export default AccountPage;
