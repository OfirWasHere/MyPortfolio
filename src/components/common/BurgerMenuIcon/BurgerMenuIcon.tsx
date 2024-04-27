import React, { useState } from "react";
import "./BurgerMenuIcon.css";
import { Box, IconButton } from "@mui/material";

function BurgerMenuIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <IconButton onClick={clickHandler} sx={{ color: "#fff" }}>
        <div className={`burger-icon ${isOpen ? 'open' : ''}`}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </IconButton>
    </Box>
  );
}

export default BurgerMenuIcon;
