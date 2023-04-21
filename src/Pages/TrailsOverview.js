import { Container, Stack, Typography, ThemeProvider, ListItem, Divider, ListItemAvatar, ListItemText, List, Skeleton} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { rsfTheme } from "../components/theme";
import BreadcrumbsNew from '../components/BreadcrumbsNew'
import TrailOverviewFrame from '../components/TrailOverviewFrame';
import { useEffect, useState } from 'react';
import PathRowItem from '../components/PathRowItem';

const breadcrumbsLinks = [
  {
    "title": "Trails",
    "link": "/trails"
  },
]

function TrailsOverview() {
  // Get rsf paths cache from Web Storage API
  const cachedData = localStorage.getItem('walkingPaths');
  useEffect(() => {
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
  }, []);
  const pathsData = JSON.parse(localStorage.getItem('walkingPaths'));
  console.log('finish fetching')

  // state of the current selected path for preview
  const [currentPathState, setCurrentPathState] = useState({data:pathsData[0]})
  
  const changeState = (newData) => {
    setCurrentPathState({data: newData});
  }

  const pathListItems = pathsData.map((path) => {
    return (
      <div key={path.id} onClick={() => changeState(path)}>
        <PathRowItem data={path} />
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
            <TrailOverviewFrame path={currentPathState.data}/>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  </ThemeProvider>
  )
}

export default TrailsOverview;