import React, { Fragment } from "react";
import styles from "styled-components";
const NewButton = styles.button`
color:#fff;
background-color:#4036B5;
padding:0.3rem 0.8rem;
border:none;
border-radius:0.2rem;
font-weight:600;
`;
export default function CreateNew() {
  return (
    <Fragment>
      <NewButton>Create New</NewButton>
    </Fragment>
  );
}
