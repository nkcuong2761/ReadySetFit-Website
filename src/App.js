import React from 'react';
import { Container, Stack, Typography, ThemeProvider, Button, Box, IconButton } from '@mui/material';
import './App.css';
import { rsfTheme } from "./components/theme";
import NavBar from './components/NavBar';
import heroImg from "./assets/hero.png";
import mockupsImg from "./assets/mockups.webp";
import lookAtPhoneImg from "./assets/onthephone.webp";
import {ReactComponent as AppleIcon} from "./assets/apple.svg";
import {ReactComponent as GooglePlayIcon} from "./assets/google-play.svg";
import {ReactComponent as MilesIcon} from "./assets/miles.svg";
import {ReactComponent as SceneryIcon} from "./assets/scenery.svg";
import {ReactComponent as CoinsIcon} from "./assets/coins.svg";
import Carousel from './components/Carousel';

function App() {
  const palette = {
    blue: rsfTheme.palette.info.main,
    red: rsfTheme.palette.error.main,
    yellow: rsfTheme.palette.warning.main,
    green: rsfTheme.palette.success.main
  }
  
  return (
  <ThemeProvider theme={rsfTheme}>
    <Container maxWidth='100vw' sx={{paddingLeft: '0px'}} padding={0}>
      <Container>
        <NavBar/>

        {/* Hero Text */}
        <Stack direction='row' justifyContent='center' paddingTop={8}>
          <Stack 
          direction='column'
          spacing={2}
          justifyContent='flex-start'
          alignItems="center"
          sx={{width:540, textAlign: 'center'}}>
            <Typography variant='h1'>
              <span style={{color: palette.blue}}>Ready Set Fit</span> Gives You a New Way to <span style={{color: palette.red}}>Exercise</span> Your <span style={{color: palette.yellow}}>Mind</span> and <span style={{color: palette.green}}>Body</span>
            </Typography>
            <Typography variant='body1'>
            The Ready Set Fit app turns your usual walking exercise to a fun, engaging and informative experience that you have never seen before. Explore a new journey everyday!
            </Typography>
          </Stack>
        </Stack>

        {/* Hero Banner */}
        <Stack height={300} paddingTop={5}
        direction='row'>
          <img src={heroImg}
          alt='An illustration of a man running in the wild'
          style={{flexGrow: 1, objectFit: 'contain', width:'100%'}}/>
          <Stack variant='text-frame'
          justifyContent='center'
          flexGrow={1}
          width='100%'>
            <Typography variant='h2'>Get the App</Typography>
            <Typography variant='body1'>Ready Set Fit is available on both App Store and Google Play. Download now and start walking!</Typography>
            <Stack
            direction='row'
            alignItems="stretch"
            spacing={1.5}
            height={60}
            paddingTop={1}>
              <Button variant='contained' startIcon={<AppleIcon/>} disableElevation sx={{width: '180px'}}>
                <Stack
                direction='column'
                alignItems="flex-start"
                sx={{textTransform: 'none'}}>
                  <Typography variant='body2'>Download on the</Typography>
                  <Typography variant='h4'>App Store</Typography>
                </Stack>
              </Button>
              <Box position='relative' padding={1}
              width={164}
              sx={{
                background: 'linear-gradient(96.34deg, #03A9F4 0%, #02A0C0 45.62%, #FFC107 73.23%, #EF5350 100%)', 
                borderRadius: '4px'}}>
                <Button variant='contained' disableElevation
                color='secondary'
                startIcon={<GooglePlayIcon/>}
                sx={{margin: '-5px', width: '174px', borderRadius: '2px'}}>
                  <Stack
                  direction='column'
                  alignItems="flex-start"
                  sx={{textTransform: 'none'}}>
                    <Typography variant='body2'>Get it on</Typography>
                    <Typography variant='h4'>Google Play</Typography>
                  </Stack>
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Stack>

      </Container>

      {/* About Ready, Set, Fit */}
      <Container maxWidth="100vw"
      sx={{
      background: rsfTheme.palette.primary.light,
      marginTop: "-52px"}}>
        <Container sx={{paddingTop: "84px"}}>
          <Stack
          direction='row'
          alignItems='center'
          spacing={4}>
            <img height={586} src={mockupsImg}
            style={{objectFit: 'contain', marginLeft:'-180px'}}
            alt='2 mockup screens of the Ready, Set, Fit Mobile App'/>
            <Stack variant='text-frame'
            justifyContent='center'>
              <Typography variant='h2'>About Ready, Set, Fit!</Typography>
              <Typography variant='body1'>Ready, Set, Fit! is a new and exciting way to learn about your surroundings at the same time you work out and get fit. Ready, Set, Fit! is the result of student/faculty collaboration at Bucknell University, and utilizes a variety of community partnerships to create path content. Developed with the support of the Degenstein Foundation of Sunbury, the Geisinger Health Foundation, and the Office of the President at Bucknell University, the app connects physical fitness to place-based learning through themed walking paths.</Typography>
            </Stack>
          </Stack>
        </Container>
      </Container>

      {/* How it Works */}
      <Container>
        <Stack
          direction='row'
          paddingY={12}
          spacing={4}>
          <Stack variant='text-frame'
            justifyContent='center'
            flexGrow={1}>
            <Typography variant='h2'>How it Works</Typography>
            <Typography variant='body1'>With more than two dozen walking trails, Ready, Set, Fit! is a free app that combines the health and wellness features of your smart phone with the power of Google maps to provide themed and informational content for specific places. Simply download the app, choose a path near you, and begin learning while walking your way towards fitness. The app currently has a variety of paths in central Pennsylvania and is expanding.</Typography>
            <Stack direction='row'
              spacing={1.5}
              alignItems='stretch'>
              <Stack direction='column'
              spacing={0.75}
              paddingY={1.5}
              flexGrow={1}
              width='100%'>
                <MilesIcon aria-label='Milage Icon'/>
                <Typography variant='h4' paddingTop={1}>Track Your Miles</Typography>
                <Typography variant='body1'>Get up-to-date data about your workout progress.</Typography>
              </Stack>
              <Stack direction='column'
              spacing={0.75}
              paddingY={1.5}
              flexGrow={1}
              width='100%'>
                <SceneryIcon aria-label='Info Point Icon'/>
                <Typography variant='h4' paddingTop={1}>Info Points</Typography>
                <Typography variant='body1'>Learn about your surrounding as you walk on each trails.</Typography>
              </Stack>
              <Stack direction='column'
              spacing={0.75}
              paddingY={1.5}
              flexGrow={1}
              width='100%'>
                <CoinsIcon aria-label='Coins Icon'/>
                <Typography variant='h4' paddingTop={1}>Trade in Rewards</Typography>
                <Typography variant='body1'>Exchange milage for rewards from our Fitness Programs.</Typography>
              </Stack>
            </Stack>
          </Stack>
          
          <img src={lookAtPhoneImg} alt='A group of 4 people looking at their phones' style={{flexGrow:1, objectFit:'contain', height:"420px", borderRadius:12}}/>
        </Stack>

        {/* Popular Trails */}
        <Carousel/>
      </Container>

    </Container>
  </ThemeProvider>
  );
}

export default App;
