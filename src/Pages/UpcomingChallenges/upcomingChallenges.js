import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "styled-components";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";
import { getChallenges } from "./slice";
const SectionDiv = styles.div`
  width: 100%;
  height:100vh;
  margin-left: 17rem;
`;

const SectionCard = styles.div`
display:grid;
width:70%;
grid-template-columns:23% 20% 20% 12% ;
grid-template-rows:17% 15% 15% 33% 20%;
height:40%;
background-color:white;
row-gap:1rem;
margin-bottom:9rem;
border-radius:0rem .3rem 0 0;
box-shadow: 0px 10px 19px rgba(9, 30, 66, 0.12);
`;

const SetionDropDown = styles.div`
// margin-top:9rem;
width:60%;
grid-template-columns:23% 20% 20% 12% ;
grid-template-rows:17% 15% 15% 33% 20%;
height:40%;
position:relative;

 ${(props) => {
   switch (props.$current) {
     case "ok":
       return `
        
display:block;
  
       `;
     default:
       return `
     display:none;
        
       `;
   }
 }}
  `;
const SetionDropDownItems = styles.div`
width:100%;
height:100%;
position:absolute;
left:4rem;
top:-5rem;box-shadow: 0px 10px 19px rgba(9, 30, 66, 0.12);
// margin:0 auto;
background:white;`;
const DropDownCard = styles.div`
width:80%;
height:35%;
background-color:#9456f89d;
border:0.15rem solid #333;
margin:1.2rem auto;
border-radius:0.5rem;
display:flex;
gap:3rem;
`;
const DropCardItem1 = styles.div`
width:15%;
display:flex;
flex-direction:column;
// justify-content:space-around;
align-items:center;
// height:50%;
margin:0.5rem 0 0.5rem 0.5rem ;
background-color:white;
border-radius:0.2rem;
border:0.1rem solid black;
`;
const DCitemRupees = styles.h3`
font-size:1.2rem;
color:black;
`;
const DCitemEntry = styles.p`
font-size:0.7rem;
font-weight:600;color:black;
// margin:0;
`;
const DropCardItem2 = styles.div`
margin:0.7rem 0;
`;

const DCItemp = styles.p`
`;
const SectionDiv2 = styles.div`
display:flex;
align-items:center;
gap:0.5rem;
margin-top:1.4rem;
// width:10%;
`;
const SectionDiv3 = styles.div`
grid-column:4/6;
grid-row:3/5;
align-self:center;
// justify-self: center;
margin-top:1.9rem;
`;
const Celebration = styles.div`
position:relative;`;
const SectionDiv4 = styles.div`
border-radius:0rem 0rem .3rem .3rem;
background-image: linear-gradient(145deg, #2b21a2 0%, #9356f8
  100%);
  grid-column:1/6;
  grid-row:5/6;
  display:flex;
  justify-content: space-around;
  align-items: center;
  color:white;
`;
const SectionDiv5 = styles.div`
grid-column:2/4;
grid-row:2/4;
`;
const CardHead = styles.h2`
border-radius:.3rem 0rem 0rem 0rem;
font-size:1.9rem;
grid-column:1/5;
letter-spacing:0.3rem;
padding-left:1.3rem;
background-image: linear-gradient(145deg, #2b21a2 0%, #9356f8
  50%, transparent 89%);
color: white;
`;
const IconDiv = styles.div`
grid-column:5/6;
justify-self: end;
`;
const IconDiv2 = styles.div`
width:23%;
height:30%;
background: linear-gradient( #E3C117 0%, #FCEB52
  100%);
display:flex;
align-items:center;
justify-content: center;
border-radius:1.5rem;
color:white;
`;
const PrizePool = styles.div`
// margin-top:1.3rem;
margin-left:1rem;
font-size:1.7rem;
font-weight:700;
text-align:center;
color:#999;
// letter-spacing:.7rem;
grid-column:1/2;
grid-row:2/3;
position:relative;
&:before{
  content:"PRIZE";
  font-weight:900;
  font-size:3rem;
  position:absolute;
  letter-spacing:0.8rem;
  top:-1rem;
  left:.4rem;
  color: rgba(0, 0, 0, 0.077);
}
`;
const CardHead2 = styles.h3`
font-size:1.7rem;
font-weight:700;
`;
const CardHead4 = styles.h3`
font-size:1.7rem;
font-weight:700;
text-align:center;
letter-spacing:.7rem;
position:relative;
color:#999;
// grid-row:2/3;
&:before{
  content:"TEAMS";
  font-weight:900;
  font-size:3rem;
  position:absolute;
  letter-spacing:1rem;
  top:-1rem;
  left:5rem;
  color: rgba(0, 0, 0, 0.077);
}
`;
const Requirements = styles(PrizePool)`
grid-column:4/5;
grid-row:2/3;
&:before{
  content:"NEED";
  letter-spacing:2.5rem;
  left:-1rem;
}
`;

const CardHead3 = styles.h5`
font-size:1.6rem;
color:green;
font-weight:400;
// width:5%;
overflow:scroll;
// letter-spacing:.2rem;
`;
const CardItem = styles.p`
font-size:0.9rem;
font-weight:500;
margin-bottom:0.5rem;
display:flex;
align-items:center;
gap:.6rem;
`;
const CardTeam1 = styles.div`
grid-column:2/3;
grid-row:3/4;
display:flex;
flex-direction:column;
align-items:center;
`;
const CardTeam2 = styles.div`
grid-column:3/4;
grid-row:3/4;
display:flex;
flex-direction:column;
align-items:center;
`;
const CardTeamName = styles.p`
// width:100%;
text-align:center;
font-size:0.6rem;
color:black;
`;
const StartDiv = styles.div``;
const StartP = styles.p`
font-size:1.2rem;
font-weight:600;
letter-spacing:0.1rem;
padding:0.1rem 0.7rem; 
border:0.2rem solid rgb(224, 52, 48);
`;
const EndP = styles.p`
font-size:1.2rem;
font-weight:600;
letter-spacing:0.1rem;
border:0.2rem solid rgb(211, 72, 229);
padding:0.1rem 0.7rem; 
`;
const ResultP = styles.p`
font-size:1.2rem;
font-weight:600;
letter-spacing:0.1rem;
border:0.2rem solid rgb(220, 204, 42);
padding:0.1rem 0.7rem; 
`;
const DateSpan = styles.span`
font-weight:400;

`;
const EndDiv = styles.div``;
const ResultDiv = styles.div``;
const CardTeamImg = styles.img`
width:40%;
`;
export default function UpcomingChallenges() {
  const [drop, dropValue] = useState("");
  const challenges = useSelector(getChallenges);
  console.log(challenges);
  console.log(drop);
  const dropHandler = (e) => {
    console.log(e.target.i);
    if (drop === "ok") {
      dropValue("");
    } else {
      dropValue("ok");
    }
  };
  return (
    <Fragment>
      <SectionDiv>
        {challenges.map((challenge, i) => (
          <>
            <SectionCard>
              <CardHead>{challenge?.name}</CardHead>
              <IconDiv>
                <ExpandMoreIcon
                  onClick={() => {
                    if (drop === i) {
                      dropValue("");
                    } else {
                      dropValue(i);
                    }
                  }}
                  sx={{ fontSize: 43 }}
                ></ExpandMoreIcon>
              </IconDiv>
              <PrizePool>
                <CardHead2>PRIZE POOL</CardHead2>
                <SectionDiv2>
                  <IconDiv2>
                    <CurrencyRupeeRoundedIcon
                      sx={{ fontSize: 43 }}
                    ></CurrencyRupeeRoundedIcon>
                  </IconDiv2>
                  <CardHead3>{challenge?.max_pool}</CardHead3>
                </SectionDiv2>
                <Celebration>
                  <CelebrationRoundedIcon
                    sx={{
                      fontSize: 93,
                      position: "absolute",
                      left: -27,
                      top: 7,
                      color: "#15e631a3",
                    }}
                  ></CelebrationRoundedIcon>
                </Celebration>
              </PrizePool>
              <SectionDiv3>
                <CardItem>
                  <PersonOutlineOutlinedIcon
                    sx={{ fontSize: 27 }}
                  ></PersonOutlineOutlinedIcon>
                  Minimum Players:&nbsp;
                  {challenge?.details?.min_player_from_team}
                </CardItem>
                <CardItem>
                  <PeopleAltOutlinedIcon
                    sx={{ fontSize: 27 }}
                  ></PeopleAltOutlinedIcon>
                  Maximum Players:&nbsp;
                  {challenge?.details?.max_player_from_team}
                </CardItem>
                <CardItem>
                  <GroupsOutlinedIcon
                    sx={{ fontSize: 27 }}
                  ></GroupsOutlinedIcon>
                  Total Players:&nbsp;{challenge?.details?.total_players}
                </CardItem>
              </SectionDiv3>
              <Requirements>
                <CardHead2>REQUIREMENTS</CardHead2>
              </Requirements>
              <SectionDiv4>
                <StartDiv>
                  <StartP>
                    Start Date:&nbsp;
                    <DateSpan>
                      {challenge?.start_timestamp.slice(0, 10)}
                    </DateSpan>
                  </StartP>
                </StartDiv>
                <EndDiv>
                  <EndP>
                    End Date:&nbsp;
                    <DateSpan>{challenge?.end_timestamp.slice(0, 10)}</DateSpan>
                  </EndP>
                </EndDiv>
                <ResultDiv>
                  <ResultP>
                    Result Date:&nbsp;
                    <DateSpan>
                      {challenge?.result_timestamp.slice(0, 10)}
                    </DateSpan>
                  </ResultP>
                </ResultDiv>
              </SectionDiv4>
              <SectionDiv5>
                <CardHead4>TEAMS</CardHead4>
              </SectionDiv5>
              <CardTeam1>
                <CardTeamImg
                  src={challenge?.teams[0]?.logo}
                  alt={"img"}
                ></CardTeamImg>
                <CardTeamName>{challenge?.teams[0]?.name}</CardTeamName>
              </CardTeam1>
              <CardTeam2>
                <CardTeamImg
                  src={challenge?.teams[1]?.logo}
                  alt={"img"}
                ></CardTeamImg>
                <CardTeamName>{challenge?.teams[1]?.name}</CardTeamName>
              </CardTeam2>
            </SectionCard>
            <SetionDropDown
              style={i == drop ? { display: "block" } : { display: "none" }}
            >
              <SetionDropDownItems>
                <DropDownCard>
                  <DropCardItem1>
                    <CurrencyRupeeRoundedIcon
                      sx={{ fontSize: 20 }}
                    ></CurrencyRupeeRoundedIcon>
                    <DCitemRupees>49</DCitemRupees>
                    <DCitemEntry>Entry Fee</DCitemEntry>
                  </DropCardItem1>
                  <DropCardItem2>
                    <CardItem>
                      <PersonOutlineOutlinedIcon
                        sx={{ fontSize: 27, color: "black" }}
                      ></PersonOutlineOutlinedIcon>
                      <DCItemp>Current Spots:&nbsp; 0</DCItemp>
                    </CardItem>
                    <CardItem>
                      <PeopleAltOutlinedIcon
                        sx={{ fontSize: 27, color: "black" }}
                      ></PeopleAltOutlinedIcon>
                      <DCItemp>Min Spots:&nbsp; 0</DCItemp>
                    </CardItem>
                  </DropCardItem2>
                  <DropCardItem2>
                    <CardItem>
                      <GroupsOutlinedIcon
                        sx={{ fontSize: 27, color: "black" }}
                      ></GroupsOutlinedIcon>
                      <DCItemp>Total Spots:&nbsp; 0</DCItemp>
                    </CardItem>
                    <CardItem>
                      <MilitaryTechOutlinedIcon
                        sx={{ fontSize: 27, color: "black" }}
                      ></MilitaryTechOutlinedIcon>
                      <DCItemp>Win Chance:&nbsp; 0</DCItemp>
                    </CardItem>
                  </DropCardItem2>
                </DropDownCard>
              </SetionDropDownItems>
            </SetionDropDown>
          </>
        ))}
      </SectionDiv>
    </Fragment>
  );
}
