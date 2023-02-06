import React, { Fragment } from "react";
import styles from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import SquareIcon from "@mui/icons-material/Square";
ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  datasets: [
    {
      // label: "# of Votes",
      data: [12, 19, 3, 5],
      backgroundColor: ["#3F4CBE", "#8D96EB", "#B6B9F8", "#DAE1FB"],
      borderWidth: 1,
      width: "5%",
    },
  ],
};
const SectionDiv = styles.div`
  margin-top: 1rem;
  margin-left:1rem;
  background-color: white;
  padding-right:1rem;
  border-left:0.1rem solid #E6E6E6;
  box-shadow: 0px 4px 11px rgba(9, 30, 66, 0.12);
  // grid-column:2/6;
  grid-column:2/5;
  grid-row:2/5;
  border-radius: 0.3rem ;
`;
const ContestParas = styles.p`
color: black;
font-weight: 700;
font-size: 0.8rem;
margin: 0rem 0 0 0.8rem;
padding-top: 0.8rem;
`;
const PieWidth = styles.div`
width:75%;
margin-left:0.2rem;
@media (min-width: 1920px) {
  // width:50%;
margin-bottom:2rem;
}
@media (min-width:1536px) {
width:100%;
  }
`;

const IconDiv = styles.div`
display:flex;
align-items:center;
margin-left:7rem;
@media (min-width: 1920px) {
  margin-left:10rem;
  }
`;
const IconP = styles.p`
font-size:0.7rem;
font-weight:600;
`;
export default function UsersData() {
  return (
    <Fragment>
      <SectionDiv>
        <ContestParas>Users Data</ContestParas>
        <IconDiv>
          <SquareIcon sx={{ color: "#4036B5", fontSize: 21 }}></SquareIcon>
          <IconP>New Users</IconP>
        </IconDiv>
        <IconDiv>
          <SquareIcon sx={{ color: "#8D96EB", fontSize: 21 }}></SquareIcon>
          <IconP>Users playing </IconP>
        </IconDiv>
        <IconDiv>
          <SquareIcon sx={{ color: "#B6B9F8", fontSize: 21 }}></SquareIcon>
          <IconP>Users referred</IconP>
        </IconDiv>
        <IconDiv>
          <SquareIcon sx={{ color: "#DAE1FB", fontSize: 21 }}></SquareIcon>
          <IconP>Referrals</IconP>
        </IconDiv>
        <PieWidth>
          <Doughnut data={data} />
        </PieWidth>
      </SectionDiv>
    </Fragment>
  );
}
