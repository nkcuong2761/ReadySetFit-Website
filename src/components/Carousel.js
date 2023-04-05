import { Button, Stack, ThemeProvider, Typography, Box } from "@mui/material";
import React from "react";
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

const pathsData = [
  {
    index:0,
    url: 'https://doc-14-88-mymaps.googleusercontent.com/untrusted/hostedimage/g2guslkp9ofsp9dc57hr0nmnb8/fpr4biormnpj3d5rv1jdgg759k/1664987779000/kanFeIA18aevL5A2WWvJyHE3rUUnQubA/09147225139192942088/5AKgB-9mmWED0CJ9hN8vAMfG25TCaFVBQEDry8HNS8EMYpDCs3kTtC_BtlN3KENAsWvU-ioMvVJ6ZyDYx7UtIVUZHtkmoRWR-6BoF6tWLjqaWcjZnwEXP1UbqmUg7Ux1api3ygHPCXadZYhTgsLIvkZIkSEpijfOYlkgP7YvQ-OH5T97V_qVF3PDKbofe3097?session=0&fife',
    name: 'Bucknell Admissions Tour',
    region: 'Bucknell Campus'
  },
  {
    index:1,
    url: 'https://lh3.googleusercontent.com/acoBsD6dlymbMjgkj-F8KdVya5Iqp81Pp-ac29LX2R6ZwmruMu_cMVnDf6FWvA4EyaKY8wJO7AicVcUQkeObSerYg0qlaKP2DGkHEbJVzeyTyFHN-dJJLwWIuIaSF3U43SvZMx8',
    name: 'Bucknell Athletic Facilities Tour',
    region: 'Bucknell Campus'
  },
  {
    index:2,
    url: 'https://lh3.googleusercontent.com/YzPT4SU3GLlKpmmgMGNmAOSpH2AZxiX9p4275IuGMqfmUXGierx-TtBCtmuOFcCkV41ScGCnEZe82RNOVGCH0uevV-4WwXkPYVnzlrglUXoah8HDJ4NM0Vj94cVcJ3M5',
    name: 'Bucknell University Historical Tour',
    region: 'Bucknell Campus'
  },
  {
    index:3,
    url: 'https://lh6.googleusercontent.com/VKGd2HU9W-pEOvYFr1GQY2yQnSX3b-nWvC4Vk-Kcb1x8WN47uMoTKtKeMkj0dDMLTaiz5ybWp8SZDZTipxkYuVEiQlNgc6tXhPwsT9RiXpSpLo3Qbksiele7yee9Sqk',
    name: 'Bucknell North Campus Arboretum Trail',
    region: 'Bucknell Campus'
  },
  {
    index:4,
    url: 'https://lh3.googleusercontent.com/QJ1r2xFJAzWOewwXKyvtBVcw5T65kTXAUoojzn37S-h8fTM1S2ehebaQaXWs5Sj5Jcz_0gHw6k8cyTVBFF0GGMpJYMkML6LVD4ChpDgQdkPFUXuG6gwG51CUFk1XCKqx',
    name: 'Bucknell Statue and Sculpture Tour',
    region: 'Bucknell Campus'
  }
]

// let pathsData = getPathsDataFromAPI()
const pathsList = pathsData.slice(0, 8).map((path) => 
  <SwiperSlide key={path.name}>
    <PathCard imgUrl={path.url} name={path.name} region={path.region}/>
  </SwiperSlide>
);
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
  const getPaths = async() => {// TODO: Problems with CORS on the Server side
    try {
      const response = await fetch("https://rsf.bucknell.edu/pathlist/?APIKey=RSFKey062318&version=1.0", {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
      })
      console.log(response)
      const jsonData = await response.json();
      console.log(jsonData)
      return jsonData
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPaths();
  }, [])

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
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
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
        <Link to="/trails" className="link-navbar">
          Learn More
        </Link>
      </Button>
    </Stack>
  </ThemeProvider>
  )
}

export default Carousel;