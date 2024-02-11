import React from "react";
import { Link } from "react-router-dom";

function SignInTab() {
  return (
    <Link to="/account/login">
      <div className="cursor-pointer underline underline-offset-8 text-xl">
        <h1>Sign In</h1>
      </div>
    </Link>
  );
}

export default SignInTab;
