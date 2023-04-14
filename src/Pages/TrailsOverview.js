import { Container, Stack, Typography, ThemeProvider, Button, ListItem, Divider, ListItemAvatar, ListItemText, List} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { rsfTheme } from "../components/theme";
import imgError from "../assets/img-error.jpg";
import {ReactComponent as ArrowRightIcon} from "../assets/arrow-right.svg";
import BreadcrumbsNew from '../components/BreadcrumbsNew'
import { FixedSizeList } from 'react-window';

const breadcrumbsLinks = [
  {
    "title": "Trails",
    "link": "/trails"
  },
]

function TrailsOverview() {
  // Get rsf paths cache from Web Storage API
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

  const pathListItems = pathsData.map((path, index) => {
    return (
      <>
        <ListItem key={index}
        alignItems='center'
        sx={{padding: '12px', gap: '12px'}}>
          <ListItemAvatar>
            <img src={path.imgUrl ? path.imgUrl : imgError} alt=""
            style={{
              width:'64px',
              height:'64px',
              borderRadius:'8px',
              objectFit:'cover'}}
            onError={(e) => {
              e.target.onError = null;
              e.target.src=imgError
            }}/>
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
        <Divider variant='middle' />
      </>
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
        <Grid container width='100%'>
          <Grid lg={4}>
            <Stack direction='column' spacing={2}>
              <Stack direction='column' spacing={0.5}>
                <Typography variant='h2'>Trail Overview</Typography>
                <Typography variant='h6' color={rsfTheme.palette.info.dark}>
                  {pathsData.length} Trails
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
        </Grid>
      </Stack>
    </Container>
  </ThemeProvider>
  )
}

export default TrailsOverview;