import React from "react";
import { rsfTheme } from "./theme";
import { Button, Stack, ThemeProvider, Typography, Box, Container, Link } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import rsfLogo from "../assets/rsf512.png";
import {ReactComponent as AppleIcon} from "../assets/apple.svg";
import {ReactComponent as GooglePlayIcon} from "../assets/google-play.svg";
import { Link as RouterLink } from "react-router-dom";

function Footer() {

  return (
  <Container maxWidth='100vw' padding={0}>
    <ThemeProvider theme={rsfTheme}>
    <Container maxWidth="100vw" sx={{
    background: rsfTheme.palette.primary.light,
    marginTop: 20,
    paddingY: 12,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    overflow: 'hidden'}}>
      <Container>
      <Grid container>
        <Grid lg={3}>
          <Stack direction='column' spacing={2}>
            <RouterLink to="/" className="link-router">
              <img height={128} width={128} src={rsfLogo} alt="RSF Logo" style={{mixBlendMode:'darken'}}/>
            </RouterLink>
            <Stack direction='column' spacing={1}>
              <Button variant='contained' startIcon={<AppleIcon/>} disableElevation 
              sx={{width: '158px', paddingX: '6px', paddingY: '10px'}}>
                <a href="https://apps.apple.com/us/app/ready-set-fit/id1261628010" target='_blank'>
                <Stack
                direction='column'
                alignItems="flex-start"
                sx={{textTransform: 'none'}}>
                  <Typography variant='caption'>Download on the</Typography>
                  <Typography variant='subtitle2'>App Store</Typography>
                </Stack>
                </a>
              </Button>
              <Box position='relative' padding='6px'
              width={146}
              sx={{
                background: 'linear-gradient(96.34deg, #03A9F4 0%, #02A0C0 45.62%, #FFC107 73.23%, #EF5350 100%)', 
                borderRadius: '4px'}}>
                <Button variant='contained' disableElevation
                color='secondary'
                startIcon={<GooglePlayIcon/>}
                sx={{margin: '-4px', width: '154px', borderRadius: '2px', padding: '8px'}}>
                  <a href='https://play.google.com/store/apps/details?id=edu.bucknell.readysetfit&hl=en&gl=US&pli=1' target='_blank'>
                  <Stack
                  direction='column'
                  alignItems="flex-start"
                  sx={{textTransform: 'none'}}>
                    <Typography variant='caption'>Get it on</Typography>
                    <Typography variant='subtitle2'>Google Play</Typography>
                  </Stack>
                  </a>
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Grid>
        <Grid lg={3} paddingTop={3}>
          <Stack spacing={3}>
            <Typography variant="h5">LEARN</Typography>
            <Stack spacing={1}>
              <Link variant="h6">About</Link>
              <Link component={RouterLink} to="/trails" variant="h6">Trails</Link>
              <Link variant="h6">Partnerships</Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid lg={3} paddingTop={3}>
          <Stack spacing={3}>
            <Typography variant="h5">MORE ABOUT US</Typography>
            <Stack spacing={1}>
              <Link variant="h6">Blog Posts</Link>
              <Link variant="h6">Press</Link>
              <Link variant="h6">Testimonials</Link>
            </Stack>
          </Stack>
        </Grid>
        <Grid lg={3} paddingTop={3}>
          <Stack spacing={3}>
            <Typography variant="h5">HELP</Typography>
            <Stack spacing={1}>
              <Link variant="h6">Terms of Use</Link>
              <Link variant="h6">Privacy Policy</Link>
              <Link variant="h6">Contact Us</Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      </Container>
    </Container>
    </ThemeProvider>
  </Container>
  )
}

export default Footer;