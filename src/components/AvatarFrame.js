import React from "react";
import { Stack, ThemeProvider, Typography } from "@mui/material";
import { rsfTheme } from "./theme";

function AvatarFrame({imgUrl, name, description}) {
  return (
    <ThemeProvider theme={rsfTheme}>
      <Stack
      direction='column'
      spacing={1.5}>
        <img src={imgUrl} width={154} height={154}
        style={{borderRadius:'50%'}} alt='Head-shot'/>
        <Stack direction='column' spacing={0.75}>
          <Typography variant="h4" sx={{alignSelf: 'stretch'}}>{name}</Typography>
          <Typography variant="body1" sx={{alignSelf: 'stretch'}}>{description}</Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  )
}

export default AvatarFrame;