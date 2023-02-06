import React, { Fragment } from "react";
import styles from "styled-components";
const SectionDiv = styles.div`
  margin-top: 1rem;
  margin-left:1rem;
  // width:30%;
  margin-right:1rem;
  background-color: white;
  padding-right:1rem;
  border-left:0.1rem solid #E6E6E6;
  box-shadow: 0px 4px 11px rgba(9, 30, 66, 0.12);
  grid-column:9/12;
  grid-row:1/3;
  border-radius: 0.3rem;
  padding-bottom:2rem;
`;
const ContestParas = styles.p`
  color: black;
  font-weight: 700;
  font-size: 0.8rem;
  margin: 0.5rem 0 0 0.8rem;
  // padding-top: 0.4rem;
`;
const InnerBox = styles.div`
width:37%;
background-color:white;
box-shadow: 0rem 0.7rem 1.1rem rgba(9, 30, 66, 0.12);
padding:0.1rem;
border-radius:0.5rem;
@media (min-width: 1920px) {
// padding:1rem;
  }
`;

const InnerRup = styles.p`
font-size:0.8rem;color:#00A355;
`;
const InnerMny = styles.p`font-size:1rem;
color:#00A355;
`;

const InnerRup2 = styles(InnerRup)`
color:#C90000;`;
const InnerMny2 = styles(InnerMny)`color:#C90000;`;
const RupeeBox = styles.div`
width:45%;
background: #EFF1FE;
text-align:center;
font-weight:700;
box-shadow: 0rem 1rem 1.2rem rgba(9, 30, 66, 0.12);
border-radius:0.5rem;
margin:0.3rem 0 0 1.5rem;
`;
const RevenueGen = styles.p`
font-size:0.6rem;
font-weight:700;
margin-top:0.5rem;
margin-left:0.5rem;
`;
const Days = styles.p`font-size:0.7rem;
font-weight:900;
margin-top:0.4rem;
margin-left:0.5rem;
`;
const Users = styles.p`font-size:0.7rem;
font-weight:400;
color:#808080;
margin-left:0.5rem;
`;
const InnerCard = styles.div`
display:flex;
justify-content:center;
margin-top:0.1rem;
gap:1.4rem;
margin-bottom:1rem;
@media (min-width: 1920px) {
  margin-top:1.5rem;
  }

`;
export default function RevenueGenerated() {
  return (
    <Fragment>
      <SectionDiv>
        <ContestParas>Revenue</ContestParas>
        <InnerCard>
          <InnerBox>
            <RupeeBox>
              <InnerRup>₹</InnerRup>
              <InnerMny>200</InnerMny>
            </RupeeBox>
            <RevenueGen>Revenue Generated</RevenueGen>
            <Days>5 days</Days>
            <Users>By 20 Users</Users>
          </InnerBox>
          <InnerBox>
            <RupeeBox>
              <InnerRup>₹</InnerRup>
              <InnerMny>35</InnerMny>
            </RupeeBox>
            <RevenueGen>Revenue Generated</RevenueGen>
            <Days>Avg. everyday</Days>
            <Users>By avg. 3 users</Users>
          </InnerBox>
        </InnerCard>
        <InnerCard>
          <InnerBox>
            <RupeeBox>
              <InnerRup2>₹</InnerRup2>
              <InnerMny2>200</InnerMny2>
            </RupeeBox>
            <RevenueGen>Revenue Generated</RevenueGen>
            <Days>5 days</Days>
            <Users>By 20 Users</Users>
          </InnerBox>
          <InnerBox>
            <RupeeBox>
              <InnerRup2>₹</InnerRup2>
              <InnerMny2>15</InnerMny2>
            </RupeeBox>
            <RevenueGen>Revenue Generated</RevenueGen>
            <Days>Avg. everyday</Days>
            <Users>By 20 Users</Users>
          </InnerBox>
        </InnerCard>
      </SectionDiv>
    </Fragment>
  );
}
