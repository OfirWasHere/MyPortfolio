import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./Components/Routes/Routes";
import Navbar from "./Components/Navbar/Navbar";
import { Box } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <RouterProvider router={createBrowserRouter(Routes)} />
    </Box>
  );
}

export default App;
