import React, { Fragment } from "react";
import styles, { css } from "styled-components";
import UserSummary from "../../Compositions/userSummary";
import ContestSummary from "../../Compositions/contestSummary";
import CreateContest from "../../Compositions/CreateContest";
import UserData from "../../Compositions/UsersData";
import UsersPaid from "../../Compositions/UsersPaid";
import Revenue from "../../Compositions/Revenue";
import UsersPlayed from "../../Compositions/UsersPlayed";
import Calender from "../../Compositions/Calender";
import ContestPlayed from "../../Compositions/ContestPlayed";
import CreateChallenge from "../../Compositions/CreateChallenge";
import { useDispatch, useSelector } from "react-redux";
import { DialyRefral } from "../../Compositions/DialyRefral";
const SectionDiv = styles.div`
display:grid;
width:100%;
// grid-template-columns:15% 5% 12% 5% 5% 5% 5% 5% 10% 6% 10% 10% 10%;
//       grid-template-rows:35% 25% 5% 30% 25% 50% 50% 50% 50%;
// grid-template-columns:20% 7% 30%  5% 5% 5% 5% 5% 20% 6% 10% 10% 10%;
// grid-template-rows:35% 25% 5% 35% 25% 50% 50% 50% 50%;

margin-left:17rem;
@media (min-width: 1920px) {
  // width:130%;
  margin-left:27rem;
  grid-template-columns:5% 5% 12% 5% 5% 5% 5% 5% 10% 6% 15% 5% 5%;
  grid-template-rows:35% 20% 30% 20% 50% 50% 50% 50%;
}
@media (min-width: 1536px) {
  margin-left:20rem;
  // grid-template-columns:15% 5% 12% 5% 5% 5% 5% 5% 10% 6% 15% 5% 5%;
  // grid-template-rows:35% 35% 5% 30% 25% 50% 50% 50% 50%;
}
@media (max-width: 374px) {
  display:block;
  margin-left:-3rem;
}
`;
const SectionDiv2 = styles.div`
margin-left:17rem;
@media (min-width: 1920px) {
  margin-left:27rem;
}
@media (min-width: 1536px) {
  margin-left:20rem;
}
@media (max-width: 374px) {
  margin-left:-3rem;
}
`;
const SectionDiv3 = styles.div`
margin-left:17rem;
@media (min-width: 1920px) {
  width:100%;
  margin-left:27rem;
}
@media (min-width: 1536px) {
  margin-left:20rem;
  // margin-top:2rem;
}
@media (max-width: 374px) {
  margin-left:-3rem;
}
`;
const SectionDiv4 = styles.div`
width:100%;
margin-left:3rem;
`;
export default function Component() {
  const dispatch = useDispatch();
  const showCreate = useSelector((state) => {
    return state.counter3.create;
  });
  return (
    <Fragment>
      {!showCreate && (
        <>
          <SectionDiv2>
            <Calender></Calender>
          </SectionDiv2>
          <SectionDiv>
            <CreateContest></CreateContest>
            <DialyRefral></DialyRefral>
          </SectionDiv>
          <SectionDiv3>
            <ContestPlayed></ContestPlayed>
          </SectionDiv3>
        </>
      )}

      {/* {showCreate && (
        <SectionDiv4>
          <CreateChallenge></CreateChallenge>
        </SectionDiv4>
      )} */}
    </Fragment>
  );
}
