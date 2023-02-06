import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import styles from "styled-components";
import { styled } from "@mui/material/styles";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
const SectionDiv = styles.div`
  // margin-left: 1rem;
  margin-top: 1rem;
  // width: 100%;
  background-color: white;
  padding-right:1rem;
  border-left:0.1rem solid #E6E6E6;
  box-shadow: 0px 4px 11px rgba(9, 30, 66, 0.12);
  grid-column:3/9;
  grid-row:1/2;
  border-radius: 0 0.3rem 0.3rem 0;
`;
const ContestParas = styles.p`
  color: black;
  font-weight: 700;
  font-size: 0.8rem;
  margin: 0rem 0 0 0.8rem;
  padding-top: 0.8rem;
`;

const SectionDiv2 = styles.div`
  display: flex;
  // margin-left: 2rem;
  gap: 0.4rem;
`;
const SectionDiv3 = styles.div`
  display: flex;
  margin: 0.4rem 0 0 1rem;
  gap: 1rem;
`;
const ContestParas1 = styles(ContestParas)`
  font-weight: 700;
  font-size: 0.8rem;
  margin: 0.3rem 0 0 0;
  padding:0;
`;
const ContestParas2 = styles(ContestParas)`
  font-weight: 500;
  font-size: 0.7rem;
  margin: 0;
  padding:0;
`;
const BarPercent = styles.div`
display:flex;
// align-items:space-between;
justify-content:space-between

`;
const BarPercentP = styles.p`
font-weight: 700;
font-size: 0.8rem;
margin-left:1.5rem;
margin-right:1.5rem;

`;
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  marginBottom: "0.4rem",
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#4036B5" : "#308fe8",
  },
}));
function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}
export default function ContestSummary() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    // <div>
    <SectionDiv>
      <ContestParas>Contest Summary</ContestParas>
      <SectionDiv3>
        <SectionDiv2>
          <FiberManualRecordIcon
            sx={{ color: "#4036B5", fontSize: 45 }}
          ></FiberManualRecordIcon>
          <div>
            <ContestParas1>05</ContestParas1>
            <ContestParas2>No. Contest completed by users</ContestParas2>
          </div>
        </SectionDiv2>
        <SectionDiv2>
          <FiberManualRecordIcon sx={{ color: "#4036B5", fontSize: 42 }} />
          <div>
            <ContestParas1>06</ContestParas1>
            <ContestParas2>Avg. Content Played</ContestParas2>
          </div>
        </SectionDiv2>
      </SectionDiv3>
      <Box
        sx={{
          marginLeft: "1.5rem",
          marginTop: "1.3rem",
          width: "90%",
          borderRadius: "5rem",
        }}
      >
        <BorderLinearProgress variant="determinate" value={50} />
      </Box>
      <BarPercent>
        <BarPercentP>Actual</BarPercentP>
        <BarPercentP>25%</BarPercentP>
      </BarPercent>
    </SectionDiv>
    // </div>
  );
}
