import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/index";
import Home from "./Pages/Home/index";
import Layout from "./Layout/Layout.js";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const showDash = useSelector((state) => {
    return state.counter.nextPage;
  });
  return (
    <Fragment>
      {!showDash && <Login />}
      {showDash && (
        <Layout>
          <Routes>{<Route path="/dashboard" element={<Home />} />}</Routes>
        </Layout>
      )}
    </Fragment>
  );
}

export default App;
