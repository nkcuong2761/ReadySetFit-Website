import React from 'react';
import { Container, Stack, Typography, ThemeProvider, Button, Box} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { rsfTheme } from "../components/theme";
import map from "../assets/map.webp";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {ReactComponent as ArrowRightIcon} from "../assets/arrow-right.svg";

function Trails() {
  return (
  <ThemeProvider theme={rsfTheme}>
    <Container maxWidth='100vw' padding={0}>
      <Container>
        <NavBar/>

        <Stack alignItems='center' variant="hero-frame">
          <Grid container height={500} spacing={3}>
            <Grid lg={4} display='flex' alignItems='center'>
              <Stack variant='text-frame'
              justifyContent='center'
              alignItems='start'
              width='100%'>
                <Typography variant='h2'>Ready, Set, Fit! Trails</Typography>
                <Typography variant='body1'>
                  We offer an exciting and unique way to get fit by providing a variety of trails for you to walk and explore. Our trails are designed to not only help you improve your physical fitness, but also to allow you to learn more about the history and culture stories behind each info points. Come join us on a journey of discovery and fitness!
                </Typography>
                <Button variant='contained' startIcon={<ArrowRightIcon/>} disableElevation className='btn in-text-frame'>
                  Explore All Trails
                </Button>
              </Stack>
            </Grid>
            <Grid lg={8}>
              <img src={map} width='100%'
              alt='An illustration of the Lewisburg city'
              style={{objectFit: 'contain'}}/>
            </Grid>
          </Grid>
        </Stack>
      </Container>

      <Container maxWidth="100vw" sx={{
      background: rsfTheme.palette.primary.light,
      borderTop: 12,
      marginTop: 16,
      paddingY: 12}}>
        <Container>
          <Stack
            direction='column'
            spacing={4}
            alignItems='center'>
            <Stack
            direction='column'
            sx={{width:540, textAlign: 'center'}}>
              <Typography variant='h3'>
                Get Inspired by Some of our Most Popular Walking Paths!
              </Typography>
              <Typography variant='h3'>
                From our beautiful Bucknell University, across central Pennsylvania, to even outside the states in Mexico, Ready Set Fit is proud of having one of the most diverse walking paths out there, and the list is always expanding.
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Container>

      <Footer borderRadius={false}/>
    </Container>
  </ThemeProvider>
  )
}

export default Trails;