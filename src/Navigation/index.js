import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import CreateChallenge from "../Pages/CreateChallenge";
import Challenges from "../Pages/Challenges/challenge";
import UpChallenges from "../Pages/UpcomingChallenges/upcomingChallenges";
import Layout from "../Layout";

export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Home />} />
          <Route path="createChallenge" element={<CreateChallenge />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="upChallenges" element={<UpChallenges />} />
        </Route>
      </Routes>
      {/* <Routes>
                <Route exact path='/' element={< Login />}></Route>
                <Route exact path='/dashboard' element={< Home />}></Route>
                <Route exact path='/contact' element={< Layout />}></Route>
            </Routes> */}
    </BrowserRouter>
  );
}
