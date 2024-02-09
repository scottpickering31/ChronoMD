import React from "react";
import MagnifyingGlass from "../searchbar/MagnifyingGlass";

function NavSearchBar() {
  return (
    <div className="flex flex-row">
      <div className="mr-2">
        <MagnifyingGlass />
      </div>
      <div>
        <input type="text" placeholder="Search" className="rounded-full p-2" />
      </div>
    </div>
  );
}

export default NavSearchBar;
