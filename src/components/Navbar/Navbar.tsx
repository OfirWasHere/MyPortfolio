import React from "react";
import "./Navbar.css";
import { Box, Typography } from "@mui/material";
import BurgerMenuIcon from "../common/BurgerMenuIcon/BurgerMenuIcon";

function Navbar(): JSX.Element {
  return (
    <Box
      className="navbar"
      color="primary.100"
      p={4}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography variant="h4" pl={4}>
        Ofir Doron
      </Typography>
      <Box>
        <BurgerMenuIcon />
      </Box>
    </Box>
  );
}

export default Navbar;
