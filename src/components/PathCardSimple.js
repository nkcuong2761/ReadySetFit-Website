import { Button, Stack, ThemeProvider, Typography } from "@mui/material";
import { rsfTheme } from "./theme";

function PathCardSimple({imgUrl, name, region, description}) {
  return (
    <ThemeProvider theme={rsfTheme}>
      <Stack
        direction='column'
        alignItems='stretch'
        spacing={1}
        >
          <img src={imgUrl} alt="" />
          <Stack direction='column'>
            <Typography variant="h4">{name}</Typography>
            <Typography variant="body2">{region}</Typography>
          </Stack>
          <Typography variant="body1">{description}</Typography>
      </Stack>
    </ThemeProvider>
  )
}

export default PathCardSimple;