import React from "react";
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

export const options = {
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {},
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [12, 19, 3, 5, 2, 3],
      borderColor: "#3634A8",
      backgroundColor: "#3634A8",
      yAxisID: "y",
      fill: false,
    },
    {
      label: "Dataset 2",
      data: [3, 9, 2, 5, 27, 13],
      borderColor: "#B6B9F8",
      backgroundColor: "#B6B9F8",
      yAxisID: "y1",
      fill: false,
    },
  ],
  responsive: true,
};
const SectionDiv = styles.div`
  // margin-left: 1rem;
  margin-top: 2rem;
  width: 50%;
  background-color: white;
  border-left:0.1rem solid #E6E6E6;
  box-shadow: 0px 4px 11px rgba(9, 30, 66, 0.12);
  border-radius: 0 0.3rem 0.3rem 0;
  margin-bottom:2rem;
  padding:1rem;
  // height:20vh;
  @media (min-width: 1920px) {
    // width:40%;
    margin-top: 4rem;
    grid-column:1/6;
    grid-row:1/3;
    width: 130%;
    }
    @media (min-width: 1536px) {
      margin-top: 4rem;
      // width: 115%;
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
export function DialyRefral() {
  return (
    <SectionDiv>
      <ContestParas>Daily Refferal</ContestParas>
      <Line options={options} data={data} />
    </SectionDiv>
  );
}
