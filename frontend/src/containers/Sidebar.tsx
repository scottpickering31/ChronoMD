import React from "react";

function Sidebar() {
  return (
    <div className="w-tiny absolute overflow-y-scroll top-0 -z-10 left-0 h-screen bg-slate-100 flex justify-evenly flex-col text-center">
      <div>
        <h1>Setting1Header</h1>
        <h2>Setting1</h2>
        <h2>Setting2</h2>
      </div>
      <div>
        <h1>Setting2Header</h1>
        <h2>Setting1</h2>
        <h2>Setting2</h2>
      </div>
      <div>
        <h1>Setting3Header</h1>
        <h2>Setting1</h2>
        <h2>Setting2</h2>
      </div>
      <div>
        <h1>Setting4Header</h1>
        <h2>Setting1</h2>
        <h2>Setting2</h2>
      </div>
      <div>
        <h1>Setting5Header</h1>
        <h2>Setting1</h2>
        <h2>Setting2</h2>
      </div>
    </div>
  );
}

export default Sidebar;
