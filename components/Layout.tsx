import React, { PropsWithChildren } from "react";
import NavBar from "./NavBar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <NavBar />
      <div className="container">{children}</div>
    </>
  );
};
export default Layout;
