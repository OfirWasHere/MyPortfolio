import React, { useState } from "react";
import "./BurgerMenuIcon.css";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function BurgerMenuIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Box>
      <IconButton
        onClick={clickHandler}
        sx={{ fontSize: "60px", color: "#fff" }}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </IconButton>
    </Box>
  );
}

export default BurgerMenuIcon;
