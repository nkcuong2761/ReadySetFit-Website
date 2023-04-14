import { Stack, ThemeProvider, Typography, Skeleton } from "@mui/material";
import { rsfTheme } from "./theme";
import { useState } from "react";

function PathCardSimple({imgUrl, name, region, description}) {
  const [isLoading, setIsLoading] = useState(true)

  const handleImageLoad = () => {
    setIsLoading(false);
  }
  const handleImageError = () => {
    // let timeoutId = setTimeout(() => {
    //   if (isLoading) {
    //     setIsLoading(false);
    //   }
    // }, 5000);

    // return () => {
    //   clearTimeout(timeoutId);
    // };
  };

  return (
    <ThemeProvider theme={rsfTheme}>
      <Stack
        direction='column'
        alignItems='stretch'
        spacing={1.5}
        >
          {isLoading ? (
            <Skeleton variant="rectangular" height={283} width="100%"
            style={{borderRadius: '12px'}}>
              <img src={imgUrl}
              style={{display:"none"}}
              onLoad={handleImageLoad}
              onError={handleImageError}/>
            </Skeleton>
          ) : (
            <img src={imgUrl} height={283} alt=""
            style={{objectFit: 'cover', borderRadius: '12px'}}/>
          )}
          <Stack direction='column'>
            <Typography variant="h4">{name}</Typography>
            <Typography variant="body2">{region}</Typography>
          </Stack>
          <Typography variant="body1">{description}</Typography>
      </Stack>
    </ThemeProvider>
  )
}

export default PathCardSimple;