import { Button, Stack, ThemeProvider, Typography, Box } from "@mui/material";
import React from "react";
import { rsfTheme } from "./theme";
import PathCard from './PathCard';
import {ReactComponent as ArrowRightIcon} from "../assets/arrow-right.svg";
import {ReactComponent as ArrowLeftIcon} from "../assets/arrow-left.svg";

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

const pathsList = pathsData.map((path) => 
  <PathCard imgUrl={path.url} name={path.name} region={path.region}/>
);

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
      translateValue: 0,
    };

    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handlePrevClick() {
    const { activeIndex, translateValue } = this.state;
    const lastIndex = pathsData.length - 1;
    const shouldResetIndex = activeIndex === 0;
    const index = shouldResetIndex ? lastIndex : activeIndex - 1;
    const nextTranslateValue = shouldResetIndex ? -(lastIndex * 100) : translateValue + 100;

    this.setState({
      activeIndex: index,
      translateValue: nextTranslateValue
    });

    setTimeout(() => {
      this.setState({ transition: false });
    }, 500);
  }

  handleNextClick() {
    const { activeIndex, translateValue } = this.state;
    const lastIndex = pathsData.length - 1;
    const shouldResetIndex = activeIndex === lastIndex;
    const index = shouldResetIndex ? 0 : activeIndex + 1;
    const nextTranslateValue = shouldResetIndex ? 0 : translateValue - 100;

    this.setState({
      activeIndex: index,
      translateValue: nextTranslateValue
    });

    setTimeout(() => {
      this.setState({ transition: false });
    }, 500);
  }

  render() {
    const { activeIndex, translateValue } = this.state;

    return (
    <ThemeProvider theme={rsfTheme}>
      <Stack
        direction='column'
        paddingY={12}
        alignItems='stretch'>
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
            <Button variant='outlined' sx={{minWidth:48}} size='small'
              onClick={this.handlePrevClick}>
              <ArrowLeftIcon/>
            </Button>
            <Button variant='contained' sx={{minWidth:48}} size='small'
              onClick={this.handleNextClick}>
              <ArrowRightIcon/>
            </Button>
          </Stack>
        </Stack>

        {/* Carousel */}
        <Stack
          direction='row'
          spacing={3}
          paddingY={4}
          sx={{
          flexWrap: 'nowrap',
          overflowX: 'hidden',
          transform: `translateX(${translateValue}%)`,
          transition: 'transform ease-out 0.45s'}}>
          { pathsList }
        </Stack>
      </Stack>
    </ThemeProvider>
  )}
}

export default Carousel;