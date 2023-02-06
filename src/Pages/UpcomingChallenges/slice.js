import { createSlice } from "@reduxjs/toolkit";
import { fetchChallenges } from "./fetcher";
export const CreateUpComingChallengesSlice = createSlice({
  name: "challenges",
  initialState: {
    challenges: [],
  },
  reducers: {},
  extraReducers: {
    [fetchChallenges.fulfilled]: (state, { payload }) => {
      return { ...state, challenges: payload };
    },
  },
});
export const getChallenges = (state) => state?.upChallenges?.challenges;
export default CreateUpComingChallengesSlice.reducer;
