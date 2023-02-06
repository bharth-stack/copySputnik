import { createAsyncThunk } from '@reduxjs/toolkit'
import useFetch from "../../Utils/hooks/useFetch";

export const fetchGameType = createAsyncThunk('createChallenge/fetchGameType', async () => {
    try {
        const gameTypeData = await useFetch({
            mehtod: "GET",
            relativePath: `/admin/game_types`,
            withCredentials: true,
        });
        return gameTypeData;
    } catch (err) {
        console.log("err", err);
    }
})

export const fetchTeam = createAsyncThunk('createChallenge/fetchTeam', async () => {
    try {
        const teamData = await useFetch({
            mehtod: "GET",
            relativePath: `/team?limit=50&skip=0`,
            withCredentials: true,
        });
        return teamData;
    } catch (err) {
        console.log("err", err);
    }
})

export const fetchContestTemplate = createAsyncThunk('createChallenge/fetchContestTemplate', async () => {
    try {
        const contestData = await useFetch({
            mehtod: "GET",
            relativePath: `/admin/contest_templates?limit=50&skip=0`,
            withCredentials: true,
        });
        return contestData;
    } catch (err) {
        console.log("err", err);
    }
})

export const fetchChallengeTemplate = createAsyncThunk('createChallenge/fetchChallengeTemplate', async () => {
    try {
        const challengeData = await useFetch({
            mehtod: "GET",
            relativePath: `/admin/challenge_templates?limit=50&skip=0`,
            withCredentials: true,
        });
        return challengeData;
    } catch (err) {
        console.log("err", err);
    }
})
