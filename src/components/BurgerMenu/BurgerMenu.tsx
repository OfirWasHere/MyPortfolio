import React from "react";
import "./BurgerMenu.css";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/RootReducer";
import { NavLink } from "react-router-dom";

function BurgerMenu() {
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  return (
    <div className={`drawer-container ${isOpen ? "is-open" : "is-closed"}`}>
      <NavLink to="/home">Home Page</NavLink>
    </div>
  );
}

export default BurgerMenu;
