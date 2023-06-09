import { Button, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import { rsfTheme } from "./theme";
import rsfLogo from "../assets/rsf512.png";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

function NavBar() {
  return (
  <Container>
    <ThemeProvider theme={rsfTheme}>
      <Stack
      direction='row'
      justifyContent='space-between'
      alignItems="center">
        <Link to="/" className="link-router">
          <img height={84} src={rsfLogo} alt="RSF Logo"/>
        </Link>
        <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="stretch"
        height={52}
        spacing={1}>
          <Button variant="text" sx={{paddingX:2}}>
            <Link to="/trails" className="link-router">
              Trails
            </Link>
          </Button>
          <Button variant="text" sx={{paddingX:2}}>Partnership</Button>
          <Button variant="text" sx={{paddingX:2}}>Blog Posts</Button>
        </Stack>
      </Stack>
    </ThemeProvider>
  </Container>
  )
}

export default NavBar;