import React from "react";
import { RootState, AppDispatch } from "../../../state/store/store";
import { useDispatch, useSelector } from "react-redux";
import { loggedIn } from "../../../state/reducers/LoggedInSlice";

function SignInTab() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.loggedIn.value);

  return (
    !isLoggedIn && (
      <div className="cursor-pointer underline underline-offset-8 text-xl">
        <h1 onClick={() => dispatch(loggedIn())}>Sign In</h1>
      </div>
    )
  );
}

export default SignInTab;
