import { createSlice } from "@reduxjs/toolkit";

interface LoggedInState {
  value: boolean;
}

const initialState: LoggedInState = {
  value: false,
};

const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.value = !state.value;
    },
  },
});

export const { loggedIn } = loggedInSlice.actions;
export default loggedInSlice.reducer;
