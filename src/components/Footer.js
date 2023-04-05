import React from "react";
import { rsfTheme } from "./theme";
import { Button, Stack, ThemeProvider, Typography, Box, Container } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import rsfLogo from "../assets/rsf512.png";
import {ReactComponent as AppleIcon} from "../assets/apple.svg";
import {ReactComponent as GooglePlayIcon} from "../assets/google-play.svg";

function Footer(borderRadius) {
  const radius = borderRadius ? 48 : 0;

  return (
    <ThemeProvider theme={rsfTheme}>
    <Container maxWidth="100vw" sx={{
    background: rsfTheme.palette.primary.light,
    marginTop: 24,
    paddingY: 12,
    borderTopLeftRadius: `${radius}px`,
    borderTopRightRadius: `${radius}px`,
    overflow: 'hidden'}}>
      <Container>
      <Grid container>
        <Grid lg={3}>
          <Stack direction='column' spacing={2}>
            <img height={128} width={128} src={rsfLogo} alt="RSF Logo" style={{mixBlendMode:'darken'}}/>
            <Stack direction='column' spacing={1}>
              <Button variant='contained' startIcon={<AppleIcon/>} disableElevation 
              sx={{width: '158px', padding: '6px'}}>
                <Stack
                direction='column'
                alignItems="flex-start"
                sx={{textTransform: 'none'}}>
                  <Typography variant='caption'>Download on the</Typography>
                  <Typography variant='subtitle2'>App Store</Typography>
                </Stack>
              </Button>
              <Box position='relative' padding='6px'
              width={146}
              sx={{
                background: 'linear-gradient(96.34deg, #03A9F4 0%, #02A0C0 45.62%, #FFC107 73.23%, #EF5350 100%)', 
                borderRadius: '4px'}}>
                <Button variant='contained' disableElevation
                color='secondary'
                startIcon={<GooglePlayIcon/>}
                sx={{margin: '-4px', width: '154px', borderRadius: '2px', padding: '4px'}}>
                  <Stack
                  direction='column'
                  alignItems="flex-start"
                  sx={{textTransform: 'none'}}>
                    <Typography variant='caption'>Get it on</Typography>
                    <Typography variant='subtitle2'>Google Play</Typography>
                  </Stack>
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid lg={3} paddingTop={3}>
          <Stack spacing={1}>
            <Typography variant="h5">LEARN</Typography>
            <Typography variant="h6">About</Typography>
            <Typography variant="h6">Trails</Typography>
            <Typography variant="h6">Partnerships</Typography>
          </Stack>
        </Grid>
        <Grid lg={3} paddingTop={3}>
          <Stack spacing={1}>
            <Typography variant="h5">MORE ABOUT US</Typography>
            <Typography variant="h6">Blog Posts</Typography>
            <Typography variant="h6">Press</Typography>
            <Typography variant="h6">Testimonials</Typography>
          </Stack>
        </Grid>
        <Grid lg={3} paddingTop={3}>
          <Stack spacing={1}>
            <Typography variant="h5">HELP</Typography>
            <Typography variant="h6">Terms of Use</Typography>
            <Typography variant="h6">Privacy Policy</Typography>
            <Typography variant="h6">Contact Us</Typography>
          </Stack>
        </Grid>
      </Grid>
      </Container>
    </Container>
    </ThemeProvider>
  )
}

export default Footer;