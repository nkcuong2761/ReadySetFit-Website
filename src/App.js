import React from 'react';
import { Container, Stack, Typography, ThemeProvider, Button, Box} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import './App.css';
import { rsfTheme } from "./components/theme";
import NavBar from './components/NavBar';
import heroImg from "./assets/hero.png";
import contactImg from "./assets/illustration-addcontent.webp";
import mockupsImg from "./assets/mockups.webp";
import lookAtPhoneImg from "./assets/onthephone.webp";
import {ReactComponent as AppleIcon} from "./assets/apple.svg";
import {ReactComponent as GooglePlayIcon} from "./assets/google-play.svg";
import {ReactComponent as MilesIcon} from "./assets/miles.svg";
import {ReactComponent as SceneryIcon} from "./assets/scenery.svg";
import {ReactComponent as CoinsIcon} from "./assets/coins.svg";
import Carousel from './components/Carousel';
import Team from './assets/head-shots/team.json';
import AvatarFrame from './components/AvatarFrame';

function App() {
  const palette = {
    blue: rsfTheme.palette.info.main,
    red: rsfTheme.palette.error.main,
    yellow: rsfTheme.palette.warning.main,
    green: rsfTheme.palette.success.main
  }
  const currentTeam = Team.map((member) => {
    if (member.position === "current-team") {
      return (
        <Grid lg={3}>
          <AvatarFrame key={member.name} imgUrl={member.imgUrl} name={member.name} description={member.description}/>
        </Grid>
      )
    }
  });
  const pastTeam = Team.map((member) => {
    if (member.position === "past-team") {
      return (
        <Grid lg={3}>
          <AvatarFrame key={member.name} imgUrl={member.imgUrl} name={member.name} description={member.description}/>
        </Grid>
      )
    }
  });
  
  return (
  <ThemeProvider theme={rsfTheme}>
    <Container maxWidth='100vw' padding={0}>
      <Container>
        {/* Hero Text */}
        <Stack justifyContent='center' variant="hero-frame">
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
        <Grid container height={400} paddingTop={5} spacing={3}>
          <Grid lg={6}>
            <img src={heroImg}
            width='100%'
            alt='An illustration of a man running in the wild'
            style={{objectFit: 'contain'}}/>
          </Grid>
          <Grid lg={6} display='flex' alignItems='center'>
            <Stack variant='text-frame'
            justifyContent='center'
            width='100%'>
              <Typography variant='h2'>Get the App</Typography>
              <Typography variant='body1'>Ready Set Fit is available on both App Store and Google Play. Download now and start walking!</Typography>
              <Stack
              direction='row'
              alignItems="stretch"
              spacing={1.5}
              height={69}
              paddingTop={1}>
                
                <Button variant='contained' startIcon={<AppleIcon/>} disableElevation sx={{width: '180px'}}>
                <a href="https://apps.apple.com/us/app/ready-set-fit/id1261628010" target='_blank'>
                  <Stack
                  direction='column'
                  alignItems="flex-start"
                  sx={{textTransform: 'none'}}>
                    <Typography variant='body2'>Download on the</Typography>
                    <Typography variant='h4'>App Store</Typography>
                  </Stack>
                </a>
                </Button>
                <Box position='relative' padding={1}
                width={164}
                sx={{
                  background: 'linear-gradient(96.34deg, #03A9F4 0%, #02A0C0 45.62%, #FFC107 73.23%, #EF5350 100%)', 
                  borderRadius: '4px'}}>
                  <Button variant='contained' disableElevation
                  color='secondary'
                  startIcon={<GooglePlayIcon/>}
                  sx={{margin: '-6px', width: '176px', borderRadius: '2px', paddingY: '10.5px'}}>
                    <a href='https://play.google.com/store/apps/details?id=edu.bucknell.readysetfit&hl=en&gl=US&pli=1' target='_blank'>
                    <Stack
                    direction='column'
                    alignItems="flex-start"
                    sx={{textTransform: 'none'}}>
                      <Typography variant='body2'>Get it on</Typography>
                      <Typography variant='h4'>Google Play</Typography>
                    </Stack>
                    </a>
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

      </Container>

      {/* About Ready, Set, Fit */}
      <Container maxWidth="100vw"
      sx={{
      background: rsfTheme.palette.primary.light,
      borderRadius: 12,
      marginTop: "-52px",
      overflow:'hidden'}}>
        <Container sx={{paddingTop: "84px"}}>
          <Stack
          direction='row'
          alignItems='center'
          spacing={5}>
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
          paddingTop={16}
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

      {/* Meet the Team */}
      <Container maxWidth="100vw" sx={{
        background: rsfTheme.palette.primary.light,
        borderRadius: 12,
        marginTop: 16,
        paddingY: 12}}>
        <Container>
          <Stack direction='column' spacing={8}>
            <Stack
              direction='column'
              spacing={4}>
                <Typography variant='h2' sx={{alignSelf: 'stretch', textAlign: 'center'}}>
                  Meet the Team
                </Typography>
                <Grid container spacing={5}>
                  {currentTeam}
                </Grid>
            </Stack>
            <Stack
              direction='column'
              spacing={4}>
                <Typography variant='h2' sx={{alignSelf: 'stretch', textAlign: 'center'}}>
                  Past Student Developers
                </Typography>
                <Grid container spacing={5}>
                  {pastTeam}
                </Grid>
            </Stack>
          </Stack>
        </Container>
      </Container>

      <Container>
        <Grid container spacing={3}
        paddingTop={16} height={400}>
          <Grid lg={6}>
            <img src={contactImg}
            alt='An illustration of two people looking up to a shining badge'
            style={{flexGrow: 1, objectFit: 'contain', 
            width:'100%'}}/>
          </Grid>
          <Grid lg={6} display='flex' alignItems='center'>
            <Stack variant='text-frame'
            justifyContent='center'
            flexGrow={1}
            width='100%'>
              <Typography variant='h2'>Interested in Adding Content?</Typography>
              <Typography variant='body1'>The development team is always looking for new content to add to our menu. If you and your organization are interested in developing new pathways, please contact us!</Typography>
              <Button variant='contained' disableElevation className="btn-main in-text-frame">
                Contact Us
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      
    </Container>
  </ThemeProvider>
  );
}

export default App;
