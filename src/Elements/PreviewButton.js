import React, { Fragment } from "react";
import styles from "styled-components";
const Previewutton = styles.button`
color:#fff;
background-color:#008646;
padding:0.3rem 0.8rem;
border:none;
border-radius:0.2rem;
font-weight:600;
`;

export default function PreviewButton() {
  return (
    <Fragment>
      <Previewutton>Preview</Previewutton>
    </Fragment>
  );
}
