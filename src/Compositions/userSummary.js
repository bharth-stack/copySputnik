import React, { Fragment } from "react";
import styles from "styled-components";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
const SectionDiv = styles.div`
  // margin-left: 10rem;
  margin-top: 1rem;
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 11px rgba(9, 30, 66, 0.12);
  // padding-bottom:2rem;
  grid-column:1/3;
  // height:117%
  border-radius: 0.3rem 0 0 0.3rem;
`;
const ContestParas = styles.p`
  color: black;
  font-weight: 700;
  font-size: 0.8rem;
  margin: 0rem 0 0 0.8rem;
  padding-top: 0.8rem;
`;
const BarAlign = styles.div`
display:flex;
gap:1rem;

`;
const BarAlignDiv = styles.div`
margin-top:1.3rem;
`;
const BarAlignP1 = styles.p`
font-weight: 700;
  font-size: 1.4rem;
`;
const BarAlignP2 = styles.p`
font-weight: 500;
  font-size: 0.8rem;
`;
export default function Summary() {
  return (
    <Fragment>
      <SectionDiv>
        <ContestParas>User Summary</ContestParas>
        <BarAlign>
          <Box sx={{ marginLeft: "1.5rem", marginTop: "1.3rem" }}>
            <CircularProgress
              sx={{
                color: (theme) =>
                  theme.palette.mode === "light" ? "#4036B5" : "#308fe8",
              }}
              variant="determinate"
              value={45}
              size={43}
              thickness={7}
            />
          </Box>
          <BarAlignDiv>
            <BarAlignP1>45%</BarAlignP1>
            <BarAlignP2>User Visited in 5 days</BarAlignP2>
          </BarAlignDiv>
        </BarAlign>
      </SectionDiv>
    </Fragment>
  );
}
