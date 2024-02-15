import React from "react";

function Sidebar() {
  return (
    <div className="w-tiny absolute top-0 -z-10 left-0 h-screen bg-slate-100 flex justify-evenly flex-col text-center">
      <div>
        <h1>Work Planner</h1>
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
  );
}

export default Sidebar;
