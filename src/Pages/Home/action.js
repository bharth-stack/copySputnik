import { createSlice } from "@reduxjs/toolkit";
import { ActionTypes } from "./constant";
export const counterSlice = createSlice({
  name: "home",
  initialState: {
    ...ActionTypes,
  },
  reducers: {
    createHandler: (state, action) => {
      state.create = action.payload;
    },
  },
});
export const { createHandler } = counterSlice.actions;
export default counterSlice;
