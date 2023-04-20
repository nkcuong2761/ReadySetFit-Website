import { Container, Stack, Typography, ThemeProvider, ListItem, Divider, ListItemAvatar, ListItemText, List, Skeleton} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { rsfTheme } from "../components/theme";
import BreadcrumbsNew from '../components/BreadcrumbsNew'
import TrailOverviewFrame from '../components/TrailOverviewFrame';
import { useEffect, useState } from 'react';
import imgError from "../assets/img-error.jpg";

const breadcrumbsLinks = [
  {
    "title": "Trails",
    "link": "/trails"
  },
]

function TrailsOverview() {
  // Get rsf paths cache from Web Storage API
  const cachedData = localStorage.getItem('walkingPaths');
  if (!cachedData) {
    // If the data is not cached, fetch it from the API
    fetch("https://rsf-dev.bucknell.edu/pathlist/?APIKey=RSFKey062318&version=1.0",
    {
      credentials: 'include',
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        // Store the data in local storage for future use
        localStorage.setItem('walkingPaths', JSON.stringify(data));
      })
  }
  const pathsData = JSON.parse(localStorage.getItem('walkingPaths'));
  console.log('finish fetching')

  // useState to keep track of loading images
  var [areImagesLoading, setImagesLoading] = useState(new Array(pathsData.length).fill(true))

  function handleImageLoad(index) {
    setImagesLoading(prevState => {
      const newImagesLoading = [...prevState];
      newImagesLoading[index] = false;
      return newImagesLoading;
    });
  }

  const pathListItems = pathsData.map((path, index) => {
    return (
      <div key={index}>
        <ListItem
        alignItems='center'
        sx={{padding: '12px', gap: '12px'}}>
          <ListItemAvatar>
            {!pathsData ? (
              <Skeleton variant="rectangular" height="64px" width="64px"
              style={{borderRadius: '8px'}}/>
            ) : (
              <>
              {areImagesLoading[index] && (
                <Skeleton variant="rectangular" height="64px" width="64px"
                style={{borderRadius: '8px'}}/>
              )}
              <img src={path.imgUrl ? path.imgUrl : imgError}
                style={{display:'none'}}
                onLoad={() => handleImageLoad(index)}
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src=imgError;
              }}/>
              {!areImagesLoading[index] && (
                <img src={path.imgUrl ? path.imgUrl : imgError} alt=""
                  style={{
                    width:'64px',
                    height:'64px',
                    borderRadius:'8px',
                    objectFit:'cover'
                  }}
                  onError={(e) => {
                    e.target.onError = null;
                    e.target.src=imgError;
                }}/>
              )}
              </>
            )}
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography variant='body1'>{path.name}</Typography>
            }
            secondary = {
              <Typography variant='body2' color={rsfTheme.palette.other.neutral5}>{path.length.toFixed(2)} miles</Typography>
            }
          />
        </ListItem>
        <Divider variant='middle'/>
      </div>
    )
  })

  return (
  <ThemeProvider theme={rsfTheme}>
    <Container>
      <Stack
      direction='column'
      alignItems='start'
      spacing={3}>
        <BreadcrumbsNew
        pastLinks={breadcrumbsLinks}
        currentLink="Trails Overview"/>

        <Grid container width='100%' spacing={4}>
          <Grid lg={4}>
            <Stack direction='column' spacing={2}>
              <Stack direction='column' spacing={0.5}>
                <Typography variant='h2'>Trail Overview</Typography>
                <Typography variant='h5' color={rsfTheme.palette.info.dark}>
                  {pathsData.length} TRAILS
                </Typography>
              </Stack>
              <List
              sx={{
                width: '100%',
                height: '656px',
                overflow: 'auto'
              }}>
                {pathListItems}
              </List>
            </Stack>
          </Grid>
          <Grid lg={8}>
            <TrailOverviewFrame path={pathsData[0]}/>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  </ThemeProvider>
  )
}

export default TrailsOverview;