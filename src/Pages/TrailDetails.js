import { Container, Stack, Typography, ThemeProvider, Button, Skeleton} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { rsfTheme } from "../components/theme";
import {ReactComponent as Export} from "../assets/export.svg";
import {ReactComponent as MapPin} from "../assets/mapPin-fill.svg";
import {ReactComponent as ArrowRightIcon} from "../assets/arrow-right.svg";
import {ReactComponent as ArrowLeftIcon} from "../assets/arrow-left.svg";
import BreadcrumbsNew from '../components/BreadcrumbsNew'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { kml as kmlToGeoJson } from "@tmcw/togeojson"
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import getIndexInfo from '../utils/kmlParser';

const APIKey = "AIzaSyCNcEBwDmx3957AWqIYx1ibIIAwFl8P2Wc";

const breadcrumbsLinks = [
  {
    "title": "Trails",
    "link": "/trails"
  },
  {
    "title": "Trails Overview",
    "link": "/trails/overview"
  },
]

function TrailDetails() {
  const [geoJson, setGeoJson] = useState(null);
  const [map, setMap] = useState(null);
  const [currentMap, setCurrentMap] = useState(null);
  const location = useLocation();
  const [trailsList, setTrailsList] = useState(null);
  const [currentTrail, setCurrentTrail] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // from is going to be the path
  const { from } = location.state;

  // Path API URL
  const pathURL = 'http://rsf-dev.bucknell.edu/paths/' + from.id + '?isServer=true';
  // console.log("reading", pathURL);

  const onMapLoad = (map, geoJsonData) => {

    setMap(map);

    // Here we create a new `Data` object using the `google.maps.Data` class
    // and pass in the `map` object. We then use the `addGeoJson` method to
    // add the GeoJSON data to the map.
    const dataLayer = new window.google.maps.Data({map});
    dataLayer.addGeoJson(geoJsonData);
  }
  const onMapUnmount = () => {
    setMap(null)
  }
  useEffect(() => {
    console.log('Map finish loading')
    // Fetch KML and convert to GeoJson so that it can be used with React GoogleMap
    fetch(pathURL, {
      method: "GET",
      headers: {
        'Content-Type': 'application/vnd.google-earth.kml+xml'
      }
    })
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onload = () => {
          const text = reader.result;
          const parser = new DOMParser();
          const kml = parser.parseFromString(text, 'text/xml');

          // covert kml to GeoJSON file so that it works with react-google-maps
          const converted = kmlToGeoJson(kml);
          setGeoJson(converted)

          //Parse into trailInfo
          setTrailsList(getIndexInfo(kml));
        };
        reader.readAsText(blob);
      })
      .catch(error => console.log(error));    
  }, [pathURL]);

  useEffect(() => {
    // set the current displayed trail
    if (trailsList != null) {
      setCurrentTrail(trailsList[currentIndex]);
    }
  }, [trailsList])

  // Initilize the Google Map
  useEffect(() => {
    if (geoJson) {
      setCurrentMap(
        <GoogleMap
          key={from.id}
          mapContainerStyle={{
            height:'100%', 
            width:'100%', 
            borderRadius: '12px',
            overflow:'hidden'}}
          center={{lat: from.startLat, lng: from.startLong}}
          zoom={15}
          onLoad={(map) => onMapLoad(map, geoJson)}
          onUnmount={onMapUnmount}
        />
      );
    }
  }, [geoJson])

  function previousPoint() {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex - 1;
      if (newIndex < 0) {
        return trailsList.length - 1;
      }
      return newIndex;
    });
  }
  function nextPoint() {
    setCurrentIndex(prevIndex => {
      const newIndex = prevIndex + 1;
      if (newIndex >= trailsList.length) {
        return 0;
      }
      return newIndex;
    });
  }

  // Add this useEffect hook to handle actions when currentIndex changes
  useEffect(() => {
    console.log("Current index:", currentIndex);
    if (trailsList != null)
      setCurrentTrail(trailsList[currentIndex]);
  }, [currentIndex]);

  return (
    <ThemeProvider theme={rsfTheme}>
      <Container>
        <Stack
        direction='column'
        alignItems='start'
        spacing={4}>
          <BreadcrumbsNew
          pastLinks={breadcrumbsLinks}
          currentLink={from.name}/>

          <Stack direction='column'
          alignItems='stretch' spacing={5} width='100%'>
            <Grid container width='100%'>
              <Grid lg={5}>
                <Stack direction='column' spacing={2}>
                  <Typography variant='h2'>{from.name}</Typography>
                  <Stack direction='row' alignItems='center' spacing={0.25}>
                    <MapPin/>
                    <Typography variant='h4'>{from.region}</Typography>
                  </Stack>
                  <Stack direction='row' spacing={4}>
                    <Stack direction='column' spacing={0.25}>
                      <Typography variant='h4'>{from.length.toFixed(2)}</Typography>
                      <Typography variant='body2' 
                      color={rsfTheme.palette.other.neutral5}>
                        Path Length
                      </Typography>
                    </Stack>
                    <Stack direction='column' spacing={0.25}>
                      <Typography variant='h4'>{from.difficulty}</Typography>
                      <Typography variant='body2' 
                      color={rsfTheme.palette.other.neutral5}>
                        Difficulty
                      </Typography>
                    </Stack>
                    <Stack direction='column' spacing={0.25}>
                      <Typography variant='h4'>? miles away</Typography>
                      <Typography variant='body2' 
                      color={rsfTheme.palette.other.neutral5}>
                        Distance
                      </Typography>
                    </Stack>
                    <Button variant='plain' startIcon={<Export/>}
                    disableElevation className='btn in-text-frame'>
                        Share
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
              <Grid lg={2} />
              <Grid lg={5}>
                <Stack direction='column' spacing={0.25}>
                  <Typography variant='h4'>Overview</Typography>
                  <Typography variant='body1'>{from.description}</Typography>
                </Stack>
              </Grid>
            </Grid>

            <Grid container width='100%'>
              <Grid lg={4} paddingRight={2}>
                {currentTrail ? (
                  <Stack
                  direction='column'
                  alignItems='stretch'
                  spacing={2}
                  padding={2}
                  height="600px"
                  sx={{backgroundColor: "#F6F6F6", borderRadius: '12px'}}>
                    <img src={currentTrail.imgURL} alt="" 
                    height={202} width="100%"
                    style={{objectFit:'cover', borderRadius: '10px'}}/>
                    <Stack direction="column"
                    spacing={1} sx={{flexGrow:1}}>
                      <Typography variant="h3">
                        {currentTrail.name}
                      </Typography>
                      <Typography variant="body1">
                        {currentTrail.description}
                      </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                      <Button variant='plain' startIcon={<ArrowLeftIcon/>}
                      disableElevation sx={{flexGrow:1, width:"100%"}}
                      onClick={previousPoint}>
                        Previous
                      </Button>
                      <Button variant='contained' endIcon={<ArrowRightIcon/>}
                      disableElevation sx={{flexGrow:1, width:"100%"}}
                      onClick={nextPoint}>
                        Next
                      </Button>
                    </Stack>
                  </Stack>
                ) : (
                  <Skeleton variant="rectangular" height="600px"
                  style={{borderRadius: '8px'}}/>
                )}
              </Grid>
              <Grid lg={8}>
                {geoJson ? (
                  <LoadScript googleMapsApiKey={APIKey}>
                    {currentMap}
                  </LoadScript>
                ) : (
                  <Skeleton variant="rectangular" height="600px"
                  style={{borderRadius: '8px'}}/>
                )}
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Container>
    </ThemeProvider>
  )
}

export default TrailDetails;