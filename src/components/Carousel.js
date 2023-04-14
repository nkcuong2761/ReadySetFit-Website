import { Button, Stack, ThemeProvider, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { rsfTheme } from "./theme";
import PathCard from './PathCard';
import {ReactComponent as ArrowRightIcon} from "../assets/arrow-right.svg";
import {ReactComponent as ArrowLeftIcon} from "../assets/arrow-left.svg";
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';
import { Pagination, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <Button variant='outlined' sx={{minWidth:48}} size='small'
    onClick={() => {
      swiper.slidePrev()
      }}>
      <ArrowLeftIcon/>
    </Button>
  )
};
const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <Button variant='outlined' sx={{minWidth:48}} size='small'
    onClick={() => swiper.slideNext()}>
      <ArrowRightIcon/>
    </Button>
  )
};

function Carousel() {
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
  
  const pathsList = pathsData.slice(0, 8).map((path) => {
    let imgUrl = path.imgUrl.split(' ')[0]
    return (
      <SwiperSlide key={path.id}>
        <PathCard imgUrl={imgUrl} name={path.name} region={path.region}/>
      </SwiperSlide>
    )}
  );

  const swiper = useSwiper();

  return (
  <ThemeProvider theme={rsfTheme}>
    <Stack
      direction='column'
      alignContent='start'
      spacing={4}
      paddingTop={16}>
      {/* Carousel */}
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={36}
        slidesPerView={3}
        style={{
          width: '100%', 
          height: 560, 
          paddingTop: 64,
          display: 'flex',
          flexDirection: 'column-reverse',
          alignItems: 'stretch',
          gap: 48}}>
        
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'>
          <Stack variant='text-frame'>
            <Typography variant='h2'>Popular Trails</Typography>
            <Typography variant='body1'>Get inspired by some of our most popular Walking Paths!</Typography>
          </Stack>
          <Stack
            direction='row'
            spacing={1}
            justifyContent='flex-end'
            alignItems='stretch'
            height={48}>
            <SwiperButtonPrev/>
            <SwiperButtonNext/>
          </Stack>
        </Stack>

        { pathsList }
      </Swiper>

      <Button variant="contained" startIcon={<ArrowRightIcon/>}  
        className="btn-main">
        <Link to="/trails" className="link-router">
          Learn More
        </Link>
      </Button>
    </Stack>
  </ThemeProvider>
  )
}

export default Carousel;