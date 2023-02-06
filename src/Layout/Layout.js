import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MiniDrawer from "../Pages/Dashboard/component";
const Align = styled.div`
  // display: flex;
  // width: 100%;
  background-color: #f4f0ff;
  margin: 0rem;
  overflow-x: hidden;
  // gap: 20rem;
`;
const Layout = (props) => {
  const showDash = useSelector((state) => {
    return state.counter.nextPage;
  });
  return (
    <Fragment>
      <Align>
        {showDash && <MiniDrawer></MiniDrawer>}
        <div>{props.children}</div>
      </Align>
    </Fragment>
  );
};

export default Layout;
