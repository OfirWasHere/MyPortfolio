import React from "react";
import Navbar from "../Navbar/Navbar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Outlet, useOutlet } from "react-router-dom";
import Main from "../Main/Main";

function Root(): JSX.Element {
  const outlet = useOutlet();

  return (
    <>
      <BurgerMenu />
      <Navbar />
      <div>{outlet ? <Outlet /> : <Main />}</div>
    </>
  );
}

export default Root;
