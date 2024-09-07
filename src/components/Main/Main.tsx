import React from "react";
import image from "../../Assets/Images/OfirImage.jpg";
import { Box, Grid, Typography } from "@mui/material";
import "./Main.css";

function Main(): JSX.Element {
  return (
    <Box display={"flex"} p={"100px"}>
      <Grid container spacing={2}>
        <Grid item xl={6}>
          <img src={image} className="main-image" alt="ofir doron" />
        </Grid>
        <Grid item xl={6}>
          <Typography variant="h3">Hey, I'm Ofir</Typography>
          <Typography variant="h5" my={"20px"}>
            I'm a passionate frontend developer based in Tel Aviv, Israel, with
            over 1.5 years of experience building responsive and dynamic web
            applications. I specialize in Vue, React, TypeScript, and modern web
            technologies to create clean, user-friendly interfaces. I'm always
            eager to learn and grow. When I'm not coding, you'll find me working
            on creative art projects. Being both an artist and a developer gives
            me a unique eye for detail, ensuring that no design element gets
            lost in translation.
          </Typography>
          <Typography variant="h5">
            Let's build something awesome together!
          </Typography>
        </Grid>
      </Grid>
      <Box pl={"50px"}></Box>
    </Box>
  );
}

export default Main;
