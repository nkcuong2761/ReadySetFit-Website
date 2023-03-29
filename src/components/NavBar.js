import { Button, Stack, ThemeProvider } from "@mui/material";
import React from "react";
import { rsfTheme } from "./theme";
import rsfLogo from "../assets/rsf512.png";

function NavBar() {
  return (
    <ThemeProvider theme={rsfTheme}>
      <Stack
      direction='row'
      justifyContent='space-between'
      alignItems="center">
        <img height={84} src={rsfLogo} alt="RSF Logo"/>
        <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="stretch"
        height={52}
        spacing={1}>
          <Button variant="text" sx={{paddingX:2}}>Trails</Button>
          <Button variant="text" sx={{paddingX:2}}>Partnership</Button>
          <Button variant="text" sx={{paddingX:2}}>Blog Posts</Button>
        </Stack>
      </Stack>
    </ThemeProvider>
  )
}

export default NavBar;