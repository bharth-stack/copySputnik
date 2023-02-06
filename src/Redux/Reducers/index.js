import Login from "../../Pages/Login/reducer";
import Dashboard from "../../Pages/Dashboard/reducer";
import Home from "../../Pages/Home/reducer";
import CreateChallengeSlice from "../../Pages/CreateChallenge/slice";
import ContestsSlice from "../../Pages/Challenges/slice";
import CreateUpComingChallengesSlice from "../../Pages/UpcomingChallenges/slice";
export const allReducer = {
  counter: Login,
  counter2: Dashboard,
  counter3: Home,
  CreateChallenge: CreateChallengeSlice,
  Contests: ContestsSlice,
  upChallenges: CreateUpComingChallengesSlice,
};
