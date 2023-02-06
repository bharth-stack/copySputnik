import { createAsyncThunk } from "@reduxjs/toolkit";
import useFetch from "../../Utils/hooks/useFetch";
export const fetchContests = createAsyncThunk(
  "createChallenge/fetchGameType",
  async () => {
    try {
      const contestData = await useFetch({
        mehtod: "GET",
        relativePath: `/contest?limit=50&skip=0`,
        withCredentials: true,
      });
      // console.log(gameTypeData);
      return contestData;
    } catch (err) {
      console.log("err", err);
    }
  }
);
