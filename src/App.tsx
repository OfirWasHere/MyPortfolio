import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";
import Navbar from "./Components/Navbar/Navbar";
import { Box } from "@mui/material";
import TopDrawer from "./Components/TopDrawer/TopDrawer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box>
      <TopDrawer />
      <Navbar />
      <RouterProvider router={createBrowserRouter(Routes)} />
    </Box>
  );
}

export default App;
