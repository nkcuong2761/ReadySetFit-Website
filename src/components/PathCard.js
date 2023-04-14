import { Button, Skeleton, Stack, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { rsfTheme } from "./theme";
import {ReactComponent as ArrowRightIcon} from "../assets/arrow-right.svg";

function PathCard({imgUrl, name, region}) {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false);
  }
  const handleImageError = () => {
    // setIsLoading(false);
  }

  return (
    <>
    {isLoading && (
      <Skeleton variant="rectangular" height="100%" width="100%"
      style={{borderRadius: '12px'}}/>
    )}
    <img 
      style={{display:"none"}}
      src={imgUrl}
      onLoad={handleImageLoad}
      onError={handleImageError}
      alt=""
    />
    {!isLoading && (
    <ThemeProvider theme={rsfTheme}>
      <Stack
        direction='column'
        spacing={3}
        justifyContent='flex-end'
        alignItems='center'
        paddingX={2}
        paddingY={3}
        sx={{ minWidth: 300,
          height: 450,
          background: `linear-gradient(180deg, rgba(41, 41, 41, 0) 40.72%, #292929 90.16%), url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          borderRadius: 3}}>
          <Stack
          direction='column'
          spacing={0.5}
          justifyContent='flex-end'
          alignItems='center'
          textAlign='center'>
            <Typography variant="h6" color='secondary' textTransform='uppercase'>{region}</Typography>
            <Typography variant="h3" color='secondary'>{name}</Typography>
          </Stack>
          <Button variant="contained" disableElevation color='secondary'
            startIcon={<ArrowRightIcon/>} className="btn-main">
            Explore
          </Button>
      </Stack>
    </ThemeProvider>
    )}
    </>
  );
}

export default PathCard;