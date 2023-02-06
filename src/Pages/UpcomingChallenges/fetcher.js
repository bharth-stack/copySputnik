import { createAsyncThunk } from "@reduxjs/toolkit";
import useFetch from "../../Utils/hooks/useFetch";
export const fetchChallenges = createAsyncThunk(
  "createChallenge/fetchGameType",
  async () => {
    try {
      const challengeData = await useFetch({
        mehtod: "GET",
        relativePath: `/challenge?limit=50&skip=0`,
        withCredentials: true,
      });
      // console.log(gameTypeData);
      return challengeData;
    } catch (err) {
      console.log("err", err);
    }
  }
);
