import React from "react";
import Navbar from "../Navbar/Navbar";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function PageNotFound(): JSX.Element {
  return (
    <>
      <BurgerMenu />
      <Navbar />
      <div>PageNotFound.....</div>
    </>
  );
}

export default PageNotFound;
