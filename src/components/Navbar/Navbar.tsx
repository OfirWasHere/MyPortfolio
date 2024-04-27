import React from "react";
import { AppBar, Box, ThemeProvider } from "@mui/material";
import theme from "../../Utils/ColorTheme";

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <AppBar sx={{ bgcolor: "isPrimary.900" }} position="static">
          Home
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Navbar;
