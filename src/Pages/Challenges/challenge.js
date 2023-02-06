import React, { useState } from "react";
import styles from "styled-components";
import { getContests } from "./slice";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import GroupsIcon from "@mui/icons-material/Groups";
import { useDispatch, useSelector } from "react-redux";
import { getChallengeTemplate } from "../CreateChallenge/slice";
const SectionDiv = styles.div`
  width: 100%;
  height:100vh;
  margin-left: 17rem;
`;
const SectionCard = styles.div`
width:80%;
background-color:white;
border-radius: 0.5rem;
box-shadow: 0px 10px 19px rgba(9, 30, 66, 0.12);
height:55%;
`;
const CardHead = styles.h2`
font-size:1.7rem;
margin:2rem 0;
text-align:center;
background-image: linear-gradient(115deg, #999 0%, #000 40%, transparent 74%);
color: white;
`;
const CardHead2 = styles.h3`
font-size:1.2rem;
margin:1rem 0 1rem 2rem;
`;
const CardItems = styles.div`
display:flex;
gap:2rem;
`;
const CardItemsIn = styles.div`
margin-left:2rem;
`;
const CardItem = styles.p`
font-size:0.8rem;
font-weight:500;
padding:0.5rem 0;
display:flex;
gap:.6rem;
`;
const SectionButton = styles.button`
border:0.1rem solid #999;
border-radius:.3rem;
padding:0.3rem 0.7rem;
font-weight:600;
color:#333;
margin:4rem 6rem;
background-color:#764af6;
font-size:0.9rem;
transition: all 0.2s;
&:hover{
color:white;
border:0.1rem solid #000;
cursor:pointer;
}
`;
const SectionButton2 = styles(SectionButton)`
margin:2rem 2.55rem;
`;
const SectionButton3 = styles(SectionButton2)`
display:flex;
align-items:center;
background-color:rgba(16, 155, 67, 0.756);
`;

const SectionCard2 = styles.div`
transition: visibility 0s, opacity 0.5s linear;
`;
const SectionLabel = styles.label`

margin:0.5rem 0 0 2rem;
font-weight:500;
`;
const SectionInput = styles.select`
margin:0.5rem 0 0 2rem;
padding:0.4rem 0.2rem;
width:80%;
`;
const SectionDiv3 = styles.div`
display:flex;
`;
const SectionForm = styles.form`
// display:flex;
margin-top:2rem;
`;

export default function Challenge() {
  const [show, showValue] = useState(true);
  const contests = useSelector(getContests);
  const challengeTemplate = useSelector(getChallengeTemplate);
  console.log(contests);
  console.log(challengeTemplate);
  const showHandler = () => {
    showValue(!show);
  };
  return (
    <SectionDiv>
      {contests.map((contest, i) => (
        <SectionCard>
          <CardHead>Contest {i + 1}</CardHead>
          <CardHead2>win chance:{contest?.win_chance}</CardHead2>
          <CardItems type={show}>
            <CardItemsIn>
              <CardItem>
                <MeetingRoomIcon></MeetingRoomIcon>entry-fees:
                {contest?.entry_fees}
              </CardItem>
              <CardItem>
                <EmojiEventsIcon></EmojiEventsIcon>
                first-winner: {contest?.first_winner}
              </CardItem>
              <CardItem>
                <GroupIcon></GroupIcon>
                current-spots: {contest?.current_spots}
              </CardItem>
            </CardItemsIn>
            {/* <Border></Border> */}
            <div>
              <CardItem>
                <PersonIcon></PersonIcon>
                min-spots: {contest?.min_spots}
              </CardItem>
              <CardItem>
                <GroupsIcon></GroupsIcon>
                total-spots: {contest?.total_spots}
              </CardItem>
              <CardItem>
                <MilitaryTechIcon></MilitaryTechIcon>
                total-winnings: {contest?.total_winnings}
              </CardItem>
            </div>
          </CardItems>
          <SectionDiv3>
            <SectionForm>
              <SectionLabel>Challenges</SectionLabel>
              <SectionInput>
                <option>Select Challenge </option>
                {challengeTemplate.map((challenge) => (
                  <option key={challenge?.id} value={challenge?.id}>
                    {challenge?.name}
                  </option>
                ))}
              </SectionInput>
            </SectionForm>
            <SectionButton onClick={showHandler}>Create Contest</SectionButton>
          </SectionDiv3>
        </SectionCard>
      ))}
    </SectionDiv>
  );
}
