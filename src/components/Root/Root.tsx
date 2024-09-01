import React from "react";
import Navbar from "../Navbar/Navbar";
import TopDrawer from "../TopDrawer/TopDrawer";
import { Outlet, useOutlet } from "react-router-dom";
import Main from "../Main/Main";

function Root() {
  const outlet = useOutlet();

  return (
    <>
      <TopDrawer />
      <Navbar />
      <div>{outlet ? <Outlet /> : <Main />}</div>
    </>
  );
}

export default Root;
