import { useEffect, useState } from "react";
import { Container, Stack, Typography, ThemeProvider, Button} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { rsfTheme } from "../components/theme";
import map from "../assets/map.webp";
import {ReactComponent as ArrowRightIcon} from "../assets/arrow-right.svg";
import PathCardSimple from '../components/PathCardSimple';
import { Link } from 'react-router-dom';

const ids=["buadmissions","bvrailtrail1","dalesridge", "shikellamymarina", "valleyforgenatpark", "ShamokinPAArtMurals", "harrisburgcapitolgrounds", "historicphilly", "WalnutAcresFarm1"]

function Trails() {
  // Web Storage API that stores rsf walkingPaths in the browser's local storage
  const cachedData = localStorage.getItem('walkingPaths')
  if (!cachedData) {
    // If the data is not cached, fetch it from the API
    fetch("https://rsf-dev.bucknell.edu/pathlist/?APIKey=RSFKey062318&version=1.0",
    {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        // Store the data in local storage for future use
        localStorage.setItem('walkingPaths', JSON.stringify(data))
      })
  }
  const pathsData = JSON.parse(localStorage.getItem('walkingPaths'))

  // Filter out only a few paths to display on the page
  const pathsList = pathsData
    .filter((path) => ids.includes(path.id))
    .map((path) => {
    let imgUrl = path.imgUrl.split(' ')[0]
    return (
      <Grid lg={4} key={path.id}>
        <PathCardSimple imgUrl={imgUrl} name={path.name} region={path.region} description={path.description} />
      </Grid>
    )
  })

  return (
  <ThemeProvider theme={rsfTheme}>
    <Container maxWidth='100vw' padding={0}>
      <Container>

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
                  <Link to="/trails/overview" className="link-router">
                    Explore All Trails
                  </Link>
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
      borderRadius: 12,
      marginTop: 16,
      paddingTop: 12,
      paddingBottom: 16}}>
        <Container>
          <Stack
            direction='column'
            spacing={5}
            alignItems='center'>
            <Stack
            direction='column'
            spacing={1}
            sx={{width:540, textAlign: 'center'}}>
              <Typography variant='h3'>
                Get Inspired by Some of our Most Popular Walking Paths!
              </Typography>
              <Typography variant='body1'>
                From our beautiful Bucknell University, across central Pennsylvania, to even outside the states in Mexico, Ready Set Fit is proud of having one of the most diverse walking paths out there, and the list is always expanding.
              </Typography>
            </Stack>
            <Grid container spacing={5}>
              {pathsList}
            </Grid>
            <Button variant='contained' startIcon={<ArrowRightIcon/>} disableElevation>
              Trails Overview
            </Button>
          </Stack>
        </Container>
      </Container>

    </Container>
  </ThemeProvider>
  )
}

export default Trails;