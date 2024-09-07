import React from "react";
import Navbar from "../Navbar/Navbar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { Outlet, useOutlet } from "react-router-dom";
import Main from "../Main/Main";
import "./Root.css";

function Root(): JSX.Element {
  const outlet = useOutlet();

  return (
    <>
      <div className="site-wrapper">
        <BurgerMenu />
        <Navbar />
        <div className="main-area-wrapper">
          <div>{outlet ? <Outlet /> : <Main />}</div>
        </div>
      </div>
    </>
  );
}

export default Root;
