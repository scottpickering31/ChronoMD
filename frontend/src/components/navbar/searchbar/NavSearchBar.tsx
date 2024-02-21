import React from "react";
import MagnifyingGlass from "../searchbar/MagnifyingGlass";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store/store";

function NavSearchBar() {
  const loggedIn = useSelector((state: RootState) => state.loggedIn.value);

  return (
<>
      {loggedIn ? (
        <div className="flex flex-row">
          <div className="mr-2">
            <MagnifyingGlass />
          </div>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="rounded-full p-2 w-80"
            />
          </div>
        </div>
      ) : (
        <div>
          <h1>Not logged in stuff</h1>
        </div>
      )}
</>
  );
}

export default NavSearchBar;
