import React from "react";
import image from "../../Assets/Images/OfirImage.jpg";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import "./Main.css";

function Main(): JSX.Element {
  return (
    <Box>
      <Box display="flex" py={10}>
        <Grid container spacing={2}>
          <Grid maxWidth="600px" xl={6} lg={6} md={12} sm={12}>
            <img src={image} className="main-image" alt="ofir doron" />
          </Grid>
          <Grid xl={6} lg={6} md={12} sm={12}>
            <Typography variant="h3" color="primary.100">
              Hey, I'm Ofir
            </Typography>
            <Typography variant="h5" color="primary.100">
              Junior Frontend Developer
            </Typography>
            <Typography variant="h6" color="primary.300" my="20px">
              I'm a passionate frontend developer based in Tel Aviv, Israel,
              with over 1.5 years of experience building responsive and dynamic
              web applications. I specialize in Vue, React, TypeScript, and
              modern web technologies to create clean, user-friendly interfaces.
              I'm always eager to learn and grow. When I'm not coding, you'll
              find me working on creative art projects. Being both an artist and
              a developer gives me a unique eye for detail, ensuring that no
              design element gets lost in translation.
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <hr className="hr-1" />
      <Box display="block">
        <Typography
          variant="h4"
          display="flex"
          justifyContent="center"
          color="primary.100"
        >
          My Journey
        </Typography>
      </Box>
    </Box>
  );
}

export default Main;
