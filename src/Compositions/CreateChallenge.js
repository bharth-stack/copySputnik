import React, { Fragment, useState, useRef } from "react";
import styles from "styled-components";
import CreateNew from "../Elements/CreateNew";
import Preview from "../Elements/PreviewButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
const SectionDiv = styles.div`
  margin-top: 1rem;
  width: 100%;
  height:100vh;
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
padding:0.3rem 1.5rem 0.3rem 1.5rem;
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
padding:0.2rem 0.3rem;
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
  const [type, setType] = useState([]);
  const [team, setTeam] = useState([]);
  const [template, setemplate] = useState([]);
  const [challengeTemplate, setChallengeTemplate] = useState([]);

  const contestName = useRef();
  const [contestType, setContestType] = useState();
  const contestTeams = useRef();
  const challengeDate = useRef();
  const [challengeTemplateValue, setChallengeTemplateValue] = useState();
  const [contestTemplate, setContestTemplate] = useState();
  const dateHandler = (e) => {
    setValue(e.target.value);
  };
  const contestTypeHandler = (e) => {
    setContestType(e.target.value);
  };
  const setContestTemplateHandler = (e) => {
    setContestTemplate(e.target.value);
  };
  const setChallengeTemplateValueHandler = (e) => {
    setChallengeTemplateValue(e.target.value);
  };
  const otpIdValue = useSelector((state) => {
    return state.counter.otpId;
  });
  const dataFetch = (event) => {
    event.preventDefault();
  
    axios({
      mehtod: "get",
   
      url: "https://dev.api.stocksy.app/v1/admin/game_types",
      withCredentials: true,
    })
      .then(function (response) {
        if (response.status === 200) {
          setType(response?.data?.response);
          console.log(response?.data?.response);
        } else {
          console.log("token invalid ");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const teamFetch = (event) => {
    event.preventDefault();
    axios({
      mehtod: "get",
 
      url: "https://dev.api.stocksy.app/v1/team/type/:type?limit=50&skip=0",
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

  const templatesFetch = (event) => {
    event.preventDefault();
    axios({
      mehtod: "get",
    
      url: "https://dev.api.stocksy.app/v1/admin/contest_templates?limit=50&skip=0",
      withCredentials: true,
    })
      .then(function (response) {
        if (response.status === 200) {

          setemplate(response?.data?.response);
          console.log(response?.data?.response);
          console.log(template[0]);
        } else {
          console.log("token invalid ");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const challengesTemplatesFetch = (event) => {
    event.preventDefault();
    axios({
      mehtod: "get",
      url: "https://dev.api.stocksy.app/v1/admin/challenge_templates?limit=50&skip=0",
      withCredentials: true,
    })
      .then(function (response) {
        if (response.status === 200) {

          setChallengeTemplate(response?.data?.response);
          console.log(response?.data?.response);
        } else {
          console.log("token invalid ");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  const createNewChallengeHandler = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://dev.api.stocksy.app/v1/admin/challenge/complete",
      data: {
        name: contestName.current.value,
        type: contestType,
        teams: ["N50A", "N50B"],
        challenge_date: challengeDate.current.value,
        contest_templates: [contestTemplate],
        challenge_template: challengeTemplateValue,
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
          <InsideAlign onClick={dataFetch}>
            <Trackerlabel>Type:</Trackerlabel>
            <Trackerselect id="cars" name="cars">

              {type.map((expense) => (
                <option onClick={contestTypeHandler} value={expense}>
                  {expense}
                </option>
              ))}
            </Trackerselect>
          </InsideAlign>

          <InsideAlign onClick={teamFetch}>
            <Trackerlabel>Team:</Trackerlabel>
            <Trackerselect id="cars" name="cars">
              <option></option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
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
          <InsideAlign onClick={templatesFetch}>
            <Trackerlabel>Contest Template:</Trackerlabel>
            <Trackerselect id="cars" name="cars">

              {template.map((e) => (
                // console.log(e)
                <option onClick={setContestTemplateHandler} value={e.id}>
                  {e.id}
                </option>
              ))}
            </Trackerselect>
          </InsideAlign>

          <InsideAlign onClick={challengesTemplatesFetch}>
            <Trackerlabel>Challenge Template:</Trackerlabel>
            <Trackerselect id="cars" name="cars">

              {challengeTemplate.map((e) => (
                // console.log(e)
                <option onClick={setChallengeTemplateValueHandler} value={e.id}>
                  {e.id}
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
