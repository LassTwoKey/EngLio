import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import MobileFooter from "../MobileFooter";

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <MobileFooter />
    </>
  );
};

export default Layout;
