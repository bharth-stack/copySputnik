import { createSlice } from "@reduxjs/toolkit";
import {
  fetchGameType,
  fetchTeam,
  fetchContestTemplate,
  fetchChallengeTemplate,
} from "./fetcher";

const API_URL = process.env.REACT_APP_API_URL;
const API_VERSION = process.env.REACT_APP_API_VERSION;

export const CreateChallengeSlice = createSlice({
  name: "createChallenge",
  initialState: {
    gameType: [],
    team: [],
    contestTemplate: [],
    challengeTemplate: [],
  },
  reducers: {
    setGameType: (state, { payload }) => {
      state.gameType = [...payload];
    },
  },
  extraReducers: {
    [fetchGameType.fulfilled]: (state, { payload }) => {
      return { ...state, gameType: payload };
    },
    [fetchTeam.fulfilled]: (state, { payload }) => {
      return { ...state, team: payload };
    },
    [fetchContestTemplate.fulfilled]: (state, { payload }) => {
      return { ...state, contestTemplate: payload };
    },
    [fetchChallengeTemplate.fulfilled]: (state, { payload }) => {
      return { ...state, challengeTemplate: payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGameType, decrement, incrementByAmount } =
  CreateChallengeSlice.actions;
export const getGameType = (state) => state?.CreateChallenge?.gameType;
export const getTeam = (state) => state?.CreateChallenge?.team;
export const getContestTemplate = (state) =>
  state?.CreateChallenge?.contestTemplate;
export const getChallengeTemplate = (state) =>
  state?.CreateChallenge?.challengeTemplate;
export default CreateChallengeSlice.reducer;
