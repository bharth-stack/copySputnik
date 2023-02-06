import { createSlice } from "@reduxjs/toolkit";
import { ActionTypes } from "./constant";
export const counterSlice = createSlice({
  name: "dashboard",
  initialState: {
    ...ActionTypes,
  },
  reducers: {
    adderHandler: (state, action) => {},
    subHandler: (state, action) => {
      state.sub = state.sub - 1;
    },
  },
});
export const { adderHandler, subHandler } = counterSlice.actions;
export default counterSlice;
