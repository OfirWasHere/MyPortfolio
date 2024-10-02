import React from "react";
import image from "../../Assets/Images/OfirImage.jpg";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import "./Main.css";
import { mainPage } from "../../Strings/MainPage";

function Main(): JSX.Element {
  return (
    <Box>
      <Box display="flex" height={"100vh"}>
        <Grid
          container
          spacing={2}
          justifyContent={"center"}
          alignContent={"center"}
          flexWrap={"wrap"}
        >
          <Grid xl={5} lg={6} md={12} sm={12}>
            <img src={image} className="main-image" alt="ofir doron" />
          </Grid>
          <Grid xl={5} lg={6} md={12} sm={12}>
            <Typography variant="h3" color="primary.100">
              {mainPage.Hero}
            </Typography>
            <Typography variant="h5" color="primary.100">
              {mainPage.subHero}
            </Typography>
            <Typography variant="h6" my="20px" color="primary.300">
              {mainPage.subtext}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <div>
        There should be down arrow here that when clicked pushes the user down
      </div>
      <Box height={"100vh"}>
        <hr className="hr-1" />
        <Box display="block">
          <Typography
            variant="h4"
            display="flex"
            justifyContent="center"
            color="primary.100"
          >
            {mainPage.aboutMeHeader}
          </Typography>
          <Typography variant="h6" color="primary.300" my="20px">
            {mainPage.aboutMeText}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Main;
