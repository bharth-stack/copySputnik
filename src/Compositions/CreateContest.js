import React, { Fragment } from "react";
import G1 from "../Assets/Images/Group.png";
import styles from "styled-components";
import BookButton from "../Elements/buttonBookHunt";
import CreateButton from "../Elements/CreateButton";
import { useDispatch, useSelector } from "react-redux";
import { createHandler } from "../Pages/Home/action";
const SectionDiv = styles.div`
  margin-left: 100px;
  margin-top: 1rem;
  width: 20%;
  background-color: white;
  grid-row:2/5;
  grid-column:1/2;
  box-shadow: 0px 4px 11px rgba(9, 30, 66, 0.12);
  text-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:1rem;
  border-radius: 0.3rem ;
  padding:1rem;


@media (min-width: 1920px) {
  margin-left: 20rem;
  width:100%;
  // margin-top: 4rem;
  // width: 130%;
  grid-column:1/5;
  grid-row:5/5;
  }
  @media (max-width: 374px) {
    width:100%;
  }
`;
const ContestParas = styles.p`
color: black;
font-weight: 700;
font-size: 0.8rem;
margin: 0rem 0 0 0.8rem;
padding-top: 0.8rem;
`;
const ContestImg = styles.img`
width:27%;
display:block;
`;
const OngoingCount = styles.div`
display:flex;
gap:2rem;
margin-bottom:0.7rem;
margin-right:1rem;
`;

const OngoingH4 = styles.h4`
font-size: 1.5rem;
font-weight:500;
color:black;
`;
const OngoingP = styles.p`font-size: 0.8rem;
font-weight:400;`;
const Border = styles.div`
border-left: 0.1rem solid #999;
  height: 50;`;
export default function CreateContest() {
  const dispatch = useDispatch();
  const createHandlero = () => {
    dispatch(createHandler(true));
  };

  return (
    <Fragment>
      <SectionDiv>
        <ContestParas>Create Contest</ContestParas>
        <ContestImg alt="Img" src={G1} />
        <BookButton></BookButton>
        <OngoingCount>
          <div>
            <OngoingH4>5</OngoingH4>
            <OngoingP>Ongoing</OngoingP>
          </div>
          <Border></Border>
          <div>
            <OngoingH4>12</OngoingH4>
            <OngoingP>Draft</OngoingP>
          </div>
        </OngoingCount>
        <CreateButton></CreateButton>
      </SectionDiv>
    </Fragment>
  );
}
