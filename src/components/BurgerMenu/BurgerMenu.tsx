import React from "react";
import "./BurgerMenu.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/RootReducer";
import { NavLink } from "react-router-dom";
import RoutesNav from "../../Routes/RoutesNav";
import { Box } from "@mui/material";

function BurgerMenu() {
  const isOpen = useSelector((state: RootState) => state.drawer.isOpen);
  const dispatch = useDispatch();

  function renderNavLinks() {
    return RoutesNav.map((route, index) => (
      <NavLink
        className="NavLinks"
        to={route.path}
        key={index}
        onClick={clickHandler}
      >
        {route.routeName}
      </NavLink>
    ));
  }

  const clickHandler = () => {
    if (isOpen) {
      dispatch({ type: "CLOSE_DRAWER" });
    } else {
      dispatch({ type: "OPEN_DRAWER" });
    }
  };

  return (
    <Box className={`drawer-container ${isOpen ? "is-open" : "is-closed"}`}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        height={"100%"}
      >
        {renderNavLinks()}
      </Box>
    </Box>
  );
}

export default BurgerMenu;
