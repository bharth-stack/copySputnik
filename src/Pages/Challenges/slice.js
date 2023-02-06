import { createSlice } from "@reduxjs/toolkit";
import { fetchContests } from "./fetcher";
export const CreateContestSlice = createSlice({
  name: "contests",
  initialState: {
    contest: [],
  },
  reducers: {},
  extraReducers: {
    [fetchContests.fulfilled]: (state, { payload }) => {
      return { ...state, contest: payload };
    },
  },
});
export const getContests = (state) => state?.Contests?.contest;
export default CreateContestSlice.reducer;
