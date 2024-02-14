import { configureStore } from "@reduxjs/toolkit";
import loggedInSlice from "../reducers/LoggedInSlice";

export const store = configureStore({
  reducer: {
    loggedIn: loggedInSlice,
    setLoggedIn: loggedInSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
