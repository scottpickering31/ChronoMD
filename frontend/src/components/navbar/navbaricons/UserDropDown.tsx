import React from "react";
import { Link } from "react-router-dom";

function UserDropDown() {
  return (
    <Link to="/account/settings">
      <div className="w-48 bg-white text-xl px-5 py-0.5 rounded-full text-center">
        <h1>Scott</h1>
        <h2 className="text-sm text-gray-300 font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">
          Mafillofacial Surgeroaw adawd aw
        </h2>
      </div>
    </Link>
  );
}

export default UserDropDown;
