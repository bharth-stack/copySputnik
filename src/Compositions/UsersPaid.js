import React, { Fragment } from "react";
import styles from "styled-components";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import SquareIcon from "@mui/icons-material/Square";
ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: [],
  datasets: [
    {
      // label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: ["#3F4CBE", "#8D96EB", "#B6B9F8"],
      borderWidth: 1,
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
  // grid-column:6/9;

  grid-column:5/9;
  grid-row:2/5;
  border-radius: 0.3rem ;
`;
const ContestParas = styles.p`
color: black;
font-weight: 700;
font-size: 0.8rem;
margin: 0rem 0 1.5rem 0.8rem;
padding-top: 0.8rem;
text-align:center;
`;
const PieWidth = styles.div`
width:80%;
margin-top:1rem;
// margin-left:0.7rem;
@media (min-width: 1920px) {
  margin-left:1.5rem;

}
@media (min-width: 1536px) {
  margin-left:1.5rem;
  margin-top:2.5rem;
width:90%;
}
`;
const IconDiv = styles.div`
display:flex;
align-items:center;
// justify-content:center;
margin-left:.5rem;
@media (min-width: 1920px) {
  margin-left:1.5rem;

}

@media (min-width: 1536px) {
  margin-left:1.5rem;

}


`;

const IconP = styles.p`
font-size:0.6rem;
font-weight:700;
`;
export default function UsersPaid() {
  return (
    <Fragment>
      <SectionDiv>
        <ContestParas>No. of Users Paid</ContestParas>
        <IconDiv>
          <SquareIcon sx={{ color: "#4036B5", fontSize: 21 }}></SquareIcon>
          <IconP>Paid at least 5 times</IconP>
        </IconDiv>
        <IconDiv>
          <SquareIcon sx={{ color: "#8D96EB", fontSize: 21 }}></SquareIcon>
          <IconP>Paid at least 3 times</IconP>
        </IconDiv>
        <IconDiv>
          <SquareIcon sx={{ color: "#B6B9F8", fontSize: 21 }}></SquareIcon>
          <IconP>Paid at least 1 times</IconP>
        </IconDiv>
        <PieWidth>
          <Pie data={data} />
        </PieWidth>
      </SectionDiv>
    </Fragment>
  );
}
