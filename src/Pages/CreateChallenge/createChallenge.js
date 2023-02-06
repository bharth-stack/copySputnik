import React, { Fragment, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "styled-components";

import CreateNew from "../../Elements/CreateNew";
import Preview from "../../Elements/PreviewButton";
import httpFetch from "../../Utils/hooks/useFetch";
import {
  getTeam,
  getGameType,
  getContestTemplate,
  getChallengeTemplate,
} from "./slice";
import {
  fetchGameType,
  fetchTeam,
  fetchContestTemplate,
  fetchChallengeTemplate,
} from "./fetcher";

const SectionDiv = styles.div`
  margin-top: 1rem;
  width: 100%;
  height:100vh;
  margin-left: 100px
`;
const ContestParas = styles.p`
  color: black;
  font-weight: 700;
  font-size: 1rem;
  margin: 0rem 0 0 0.8rem;
  padding-top: 0.8rem;
  margin-bottom:1rem;
  text-align:center;
  grid-column:2/3;
`;
const ContestParas2 = styles(ContestParas)`
text-align:start;
margin-left:2rem;
font-size:0.8rem;
`;
const SectionDiv1 = styles.div`

// padding-right:2rem;
height:90%;
background-color: white;
border-left:0.1rem solid #E6E6E6;
box-shadow: 0px 4px 11px rgba(9, 30, 66, 0.12);
border-radius: 0 0.3rem 0.3rem 0;
// display:grid;
// grid-template-columns:30% 30% 30%;
// grid-template-rows:7% 5% 5% 5% 5% 5% 5% 6% 2% 5% 1% 10% 3% 7% 5%;
row-gap:0.3rem;
column-gap:0.3rem;
@media (min-width: 1536px) {
  // grid-template-rows:10% 4% 4% 4% 3% 7% 6% 4% 2% 5% 5% 5% 3% 15% 5%;
  grid-template-rows:7% 5% 5% 5% 5% 5% 5% 6% 2% 5% 1% 10% 3% 7% 5%;
  height:70%;
}
@media (min-width: 1920px) {
  grid-template-rows:10% 3% 3% 3% 3% 7% 6% 4% 2% 5% 5% 5% 3% 15% 5%;
  height:70%;
}
`;
const SectionDiv2 = styles.div`
margin-left:3rem;
grid-column:2/4;
`;

const ContestHead1 = styles.h4`
font-weight:700;
font-size:0.8rem;
grid-column:2/3;
grid-row:2/3;
`;
const ContestHead2 = styles(ContestHead1)`grid-column:3/4;`;
const ContestHead3 = styles(ContestHead1)`grid-column:1/2;
grid-row:3/4;
text-align:center;
align-items:center;
`;
const ContestHead4 = styles(ContestHead1)`grid-column:1/2;
grid-row:4/5;
text-align:center;
`;
const ContestHead5 = styles(ContestHead1)`grid-column:1/2;
grid-row:5/6;
text-align:center;
`;
const SectionDiv3 = styles.div`
// width:100%;
display:flex;
margin-top:0.5rem;
margin-left:3rem;
// gap:4rem;
grid-column:1/4;
column-gap:5rem;
grid-row:8/9;
`;
const SectionDiv4 = styles.div`
2/4
`;
const SectionAlign = styles.div`
width:60%;
display:grid;
grid-template-columns:15% 20% 0%;
grid-template-rows:20% 20% 20%;

`;
const FornInputDate = styles.input` 
background: "#000";
border: 0.1rem solid #d7d7d7;
border-radius: 0.2rem;
padding:0.3rem;
font-weight:700;
color:"red";
grid-column:2/3;
// padding:0.5rem;
background-color:#EFF1FE;
border:none;
color:#3634A8;
width:50%;



`;
const FornInputDate2 = styles(FornInputDate)`
grid-row:3/4;
`;
const FornInputDate3 = styles(FornInputDate)`
grid-row:4/5;
`;
const FornInputTime = styles(FornInputDate)`
grid-column:3/4
`;
const FornInputTime2 = styles(FornInputTime)`
grid-row:3/4;

`;
const FornInputTime3 = styles(FornInputTime)`
grid-row:4/5;
`;
const HorizantalLine = styles.hr`
margin-top:1rem;
grid-column:1/4;
margin-left:2rem;
background-color:#616161;
height:0.1rem;
`;
const Trackerlabel = styles.label`
font-size:1rem;
font-weight:600;
`;
const Trackerselect = styles.select`
padding:0.7rem;
background-color:#EFF1FE;
border:none;
color:#3634A8;
// margin-left:.1rem;
width:50%;
`;
const Trackerselect2 = styles(Trackerselect)`
padding:0.2rem 1rem 0.2rem 1rem;

`;
const InsideAlign = styles.div`
display:flex;
flex-direction:column;
margin-top:0.7rem;
margin-left:3rem;
`;
const InputLabel = styles.label`font-size:.7rem;
font-weight:700;
// margin-right:1rem;
margin-bottom:0.2rem;
`;
const Input1 = styles.input`
width:90%;
background-color:#EFF1FE;
border:none;
color:#3634A8;
padding:0.7rem;
// border:none;
`;
const ContestsNamesDiv = styles.div`
margin-left:3rem;
margin-top:2.7rem;
grid-column:1/4;
display:flex;
gap:1rem;
align-items:center;
`;
const InputAlign = styles.div`
display:flex;
flex-direction:column;
`;
const WinningLink = styles.p`
grid-column:3/4;
grid-row:13/14;
justify-self: end;
//  justify-self: center;
font-size:.7rem;
font-weight:600;
border-bottom:0.1rem solid #4036B5;
color:#4036B5;
`;
const ButtonAlign = styles.div`
margin-top:2rem;
margin-left:3rem;
grid-row:14/15;
grid-column:1/3;
`;
const ButtonAlign2 = styles.div`
margin-top:1rem;
margin-left:3rem;
grid-row:15/16;
grid-column:2/3;
`;
const CancelDiv = styles.div`
position:absolute;
grid-column:3/4;
justify-self: end;
`;

export default function CreateChallenge() {
  const [value, setValue] = useState("");
  // const [type, setType] = useState([]);
  // const [team, setTeam] = useState([]);
  // const [template, setemplate] = useState([]);
  // const [challengeTemplate, setChallengeTemplate] = useState([]);

  const contestName = useRef();
  const [selectedContestType, setSelectedContestType] = useState();
  const [selectedTeam, setSelectedTeam] = useState([]);
  const challengeDate = useRef();
  const [seletedContestTemplate, setSelectedContestTemplate] = useState();
  const [selectedChallengeTemplate, setSelectedChallengeTemplate] = useState();
  const dateHandler = (e) => {
    setValue(e.target.value);
  };
  const selectContestTypeHandler = (e) => {
    setSelectedContestType(e.target.value);
  };
  const selectTeamHandler = (e) => {
    setSelectedTeam([...selectedTeam, e.target.value]);
  };
  const selectContestTemplateHandler = (e) => {
    setSelectedContestTemplate(e.target.value);
  };
  const setChallengeTemplateHandler = (e) => {
    setSelectedChallengeTemplate(e.target.value);
  };
  const otpIdValue = useSelector((state) => {
    return state.counter.otpId;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGameType());
    dispatch(fetchTeam());
    dispatch(fetchContestTemplate());
    dispatch(fetchChallengeTemplate());
  }, []);

  const gameType = useSelector(getGameType);
  const team = useSelector(getTeam);
  const contestTemplate = useSelector(getContestTemplate);
  const challengeTemplate = useSelector(getChallengeTemplate);

  const createNewChallengeHandler = (e) => {
    e.preventDefault();
    httpFetch({
      method: "post",
      relativePath: "/admin/challenge/complete",
      payload: {
        name: contestName.current.value,
        type: selectedContestType,
        teams: selectedTeam,
        challenge_date: challengeDate.current.value,
        contest_templates: [seletedContestTemplate],
        challenge_template: selectedChallengeTemplate,
      },
      withCredentials: true,
    })
      .then(function (response) {
        if (response.status === 200) {
          console.log(response);
        } else {
          console.log("token invalid ");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <Fragment>
      <SectionDiv>
        <SectionDiv1>
          <ContestParas>Create Challenge</ContestParas>
          <SectionDiv2>
            <Trackerlabel>Contest Name:</Trackerlabel>
            <Input1 ref={contestName} placeholder="name"></Input1>
          </SectionDiv2>
          <InsideAlign>
            <Trackerlabel>Type:</Trackerlabel>
            <Trackerselect
              id="type"
              name="type"
              onChange={selectContestTypeHandler}
              value={selectedContestType}
            >
              <option>Select Type</option>
              {gameType.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Trackerselect>
          </InsideAlign>

          <InsideAlign>
            <Trackerlabel>Team 1:</Trackerlabel>
            <Trackerselect
              id="team1"
              name="Team"
              onChange={selectTeamHandler}
              value={selectedTeam[0]}
            >
              <option>Select Team</option>
              {team.map((teamDetails) => (
                <option
                  key={`team1-${teamDetails?.id}`}
                  value={teamDetails?.id}
                >
                  {teamDetails?.name}
                </option>
              ))}
            </Trackerselect>
          </InsideAlign>
          <InsideAlign>
            <Trackerlabel>Team 2:</Trackerlabel>
            <Trackerselect
              id="team2"
              name="Team"
              onChange={selectTeamHandler}
              value={selectedTeam[1]}
            >
              <option>Select Team</option>
              {team.map((teamDetails) => (
                <option
                  key={`team2-${teamDetails?.id}`}
                  value={teamDetails?.id}
                >
                  {teamDetails?.name}
                </option>
              ))}
            </Trackerselect>
          </InsideAlign>
          <InsideAlign>
            <Trackerlabel>Contest Date:</Trackerlabel>
            <FornInputDate
              type="date"
              defaultValue={value}
              onChange={dateHandler}
              ref={challengeDate}
            ></FornInputDate>
          </InsideAlign>
          <InsideAlign>
            <Trackerlabel>Contest Template:</Trackerlabel>
            <Trackerselect
              id="contest"
              name="contest"
              onChange={selectContestTemplateHandler}
              value={seletedContestTemplate}
            >
              <option>Select Contest Template</option>
              {contestTemplate.map((e) => (
                <option key={e?.id} value={e?.id}>
                  {e?.name}
                </option>
              ))}
            </Trackerselect>
          </InsideAlign>

          <InsideAlign>
            <Trackerlabel>Challenge Template:</Trackerlabel>
            <Trackerselect
              id="challenge"
              name="challenge"
              onChange={setChallengeTemplateHandler}
              value={selectedChallengeTemplate}
            >
              <option>Select Challenge Template</option>
              {challengeTemplate.map((challenge) => (
                <option key={challenge?.id} value={challenge?.id}>
                  {challenge?.name}
                </option>
              ))}
            </Trackerselect>
          </InsideAlign>
          <ButtonAlign onClick={createNewChallengeHandler}>
            <CreateNew></CreateNew>
          </ButtonAlign>
          <ButtonAlign2>
            <Preview></Preview>
          </ButtonAlign2>
        </SectionDiv1>
      </SectionDiv>
    </Fragment>
  );
}
