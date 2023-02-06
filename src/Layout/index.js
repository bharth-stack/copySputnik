import { Outlet } from "react-router-dom";
import MiniDrawer from "../Pages/Dashboard/component";

const Layout = () => {
  return (
    <>
      <MiniDrawer></MiniDrawer>
      <Outlet />
    </>
  );
};

export default Layout;
