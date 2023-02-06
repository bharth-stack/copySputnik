import React, { Fragment, useState } from "react";
import styles from "styled-components";

import DateRangeIcon from "@mui/icons-material/DateRange";
const SectionDiv = styles.div`
margin:0rem 0 0 1.3rem;




`;
const HeadingH1 = styles.h1`
color:#4036B5
`;
const HeadingDiv = styles.div`
display:flex;
gap:4rem;

@media (max-width: 374px) {
  display:block;
}
`;
const PassagP = styles.p`
color:#808288;
margin-top:0.7rem;
font-weight:500;
`;
const FornInputDate = styles.input` background-color: #fff;
border: 0.1rem solid #d7d7d7;
border-radius: 0.2rem;
padding:0.3rem;
font-weight:700;
@media (max-width: 374px) {
margin-top:1rem;
}
`;
const FormDiv = styles.div`
display:flex;
gap:0.7rem;
align-items:center;
`;
export default function Calender() {
  const [value, setValue] = useState("2018-07-22");
  const dateHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <Fragment>
      <SectionDiv>
        <PassagP>Hi Riya! You’re prepping for </PassagP>
        <HeadingDiv>
          <HeadingH1>STOCKSY DASHBOARD</HeadingH1>

          <FormDiv>
            <DateRangeIcon
              sx={{
                color: "#3634A8",
                fontSize: 30,
                backgroundColor: "#fff",
                padding: "0.2rem",
              }}
            ></DateRangeIcon>

            <FornInputDate
              type="date"
              value={value}
              onChange={dateHandler}
            ></FornInputDate>
          </FormDiv>
          <FormDiv>
            <DateRangeIcon
              sx={{
                color: "#3634A8",
                fontSize: 30,
                backgroundColor: "#fff",
                padding: "0.2rem",
              }}
            ></DateRangeIcon>

            <FornInputDate
              type="date"
              value={value}
              onChange={dateHandler}
            ></FornInputDate>
          </FormDiv>
        </HeadingDiv>
      </SectionDiv>
    </Fragment>
  );
}
