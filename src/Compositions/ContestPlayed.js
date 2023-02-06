import React, { Fragment } from "react";
import styles from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SectionDiv = styles.div`
  // margin-left: 1rem;
  margin-top: 2rem;
  width: 100%;
  background-color: white;
  border-left:0.1rem solid #E6E6E6;
  box-shadow: 0px 4px 11px rgba(9, 30, 66, 0.12);
  border-radius: 0 0.3rem 0.3rem 0;
  margin-bottom:2rem;
  // height:20vh;
  @media (min-width: 1920px) {
    // width:6%;
    width:60%;
    // margin-top: 7rem;
    // width: 10%;
    grid-column:1/2;
    grid-row:3/4;
    }
    @media (min-width: 1536px) {
      margin-top: 4rem;
      // width: 115%;
    }
    @media (max-width: 374px) {
      width:83%;
    }
`;
const ContestParas = styles.p`
  color: black;
  font-weight: 700;
  font-size: 0.8rem;
  margin: 0rem 0 0 0.8rem;
  padding-top: 0.8rem;
`;
const LineAlign = styles.div`
margin:0;
padding:1rem 1rem 3rem 3rem;
// height:100rem;
width:97%;
// height:70vh; 

@media (min-width: 1920px) {
  // width=1600vw;
width:80%;
}
@media (max-width: 374px) {
// width:100%;

height:50%;
}
`;
function ContestPlayed() {
  const data2 = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3, 4, 8, 3, 9, 6],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: ["#3F4CBE"],
        borderWidth: 2,
        responsive: true,
      },
    ],
  };
  return (
    <Fragment>
      <SectionDiv>
        <ContestParas>Contest Played</ContestParas>
        <LineAlign>
          <Line data={data2}></Line>
        </LineAlign>
      </SectionDiv>
    </Fragment>
  );
}

export default ContestPlayed;
