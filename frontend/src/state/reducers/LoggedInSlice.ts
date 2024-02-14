import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { loggedIn, setLoggedIn } = loggedInSlice.actions;
export default loggedInSlice.reducer;
