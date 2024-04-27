import React from "react";
import "./Navbar.css";
import { Box, Typography } from "@mui/material";
import BurgerMenuIcon from "../common/BurgerMenuIcon/BurgerMenuIcon";

function Navbar() {
  return (
    <Box
      pt={6}
      pl={8}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="h4" color={"#fff"}>
        Ofir Doron
      </Typography>
      <Box pr={8}>
        <BurgerMenuIcon />
      </Box>
    </Box>
  );
}

export default Navbar;
