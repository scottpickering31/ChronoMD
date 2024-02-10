import React from "react";
import { RootState, AppDispatch } from "../../../state/store/store";
import { useDispatch, useSelector } from "react-redux";
import { loggedIn } from "../../../state/reducers/LoggedInSlice";

function SignUpTab() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.loggedIn.value);
  return (
    !isLoggedIn && (
      <div
        onClick={() => dispatch(loggedIn())}
        className="cursor-pointer font-bold text-xl bg-green-500 p-3 px-5 rounded-full"
      >
        <h1>Sign Up</h1>
      </div>
    )
  );
}

export default SignUpTab;
