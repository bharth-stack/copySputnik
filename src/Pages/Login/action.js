import { createSlice } from "@reduxjs/toolkit";
import { ActionTypes } from "./constant";
export const counterSlice = createSlice({
  name: "Login",
  initialState: {
    ...ActionTypes,
  },
  reducers: {
    showHandler: (state, action) => {
      console.log(action.payload);
      localStorage.setItem("nextPage", action.payload);
      state.nextPage = action.payload;
    },
    emailHandler: (state, action) => {
      state.email = action.payload;
    },
    passHandler: (state, action) => {
      state.password = action.payload;
    },
    otpHandlers: (state, action) => {
      state.otpId = action.payload;
    },
  },
});
export const { emailHandler, passHandler, showHandler, otpHandlers } =
  counterSlice.actions;
export default counterSlice;
