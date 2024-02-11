import React from "react";
import { Link } from "react-router-dom";

function SignUpTab() {
  return (
    <Link to="/account/signup">
      <div className="cursor-pointer font-bold text-xl bg-green-500 p-3 px-5 rounded-full">
        <h1>Sign Up</h1>
      </div>
    </Link>
  );
}

export default SignUpTab;
