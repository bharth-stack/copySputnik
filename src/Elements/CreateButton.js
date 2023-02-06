import React, { Fragment } from "react";
import styles from "styled-components";
import { Outlet, Link } from "react-router-dom";
const CreateButtonTag = styles.button`
background-color:white;
border-radius:2rem;
display:inline-block;
background: #4036B5;
border:none;
color:white;
padding:0.8rem 2rem;
font-size:1.1rem;
width:55%;
`;
export default function CreateButton() {
  return (
    <Fragment>
      <CreateButtonTag>
        <Link to="/createChallenge">Create</Link>
      </CreateButtonTag>
    </Fragment>
  );
}
