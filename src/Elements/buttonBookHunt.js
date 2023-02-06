import React, { Fragment } from "react";
import styles from "styled-components";
const SectionButton = styles.button`
background-color:white;
padding:0.3rem;
border-radius:1rem;
width:40%;
// display:inline;
`;

export default function ButtonBookHunt() {
  return (
    <Fragment>
      <SectionButton>Book Hunt</SectionButton>
    </Fragment>
  );
}
