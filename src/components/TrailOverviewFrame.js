import { Stack, Typography, ThemeProvider, Button, Skeleton} from '@mui/material';
import { rsfTheme } from "../components/theme";
import {ReactComponent as Export} from "../assets/export.svg";
import {ReactComponent as MapPin} from "../assets/mapPin-fill.svg";
import {ReactComponent as ArrowRightIcon} from "../assets/arrow-right.svg";
import { kml as kmlToGeoJson } from "@tmcw/togeojson"
import { useEffect, useState } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const APIKey = "AIzaSyCNcEBwDmx3957AWqIYx1ibIIAwFl8P2Wc";

function TrailOverviewFrame({path}) {
  const [geoJson, setGeoJson] = useState(null);
  const [map, setMap] = useState(null);
  const [currentMap, setCurrentMap] = useState(null);
  
  // The `onLoad` function is a callback that is called by the `GoogleMap`
  // component after the map has been initialized. The `map` parameter is
  // provided by the `GoogleMap` component, not by the code that calls the
  // `onLoad` function.
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
    console.log('load xong map')
    fetch('http://rsf-dev.bucknell.edu/paths/' + path.id + '?isServer=true', {
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
        };
        reader.readAsText(blob);
      })
      .catch(error => console.log(error));
  }, [path]);

  useEffect(() => {
    console.log('dcm')
    if (geoJson) {
      setCurrentMap(
        <GoogleMap
          key={path.id}
          mapContainerStyle={{
            height:'100%', 
            width:'100%', 
            borderRadius: '12px',
            overflow:'hidden'}}
          center={{lat: path.startLat, lng: path.startLong}}
          zoom={15}
          onLoad={(map) => onMapLoad(map, geoJson)}
          onUnmount={onMapUnmount}
        />
      );
    }
  }, [geoJson])

  return (
    <ThemeProvider theme={rsfTheme}>
      <Stack spacing={1.5}
      direction='column'
      alignItems='stretch'
      height='100%'>
        <Stack direction='row' 
        alignItems='stretch'
        justifyContent='space-between'
        height={160}>
          <Stack direction='column' justifyContent='space-between'>
            <Typography variant='h3'>{path.name}</Typography>
            <Stack direction='row' alignItems='center' spacing={0.25}>
              <MapPin/>
              <Typography variant='h4'>{path.region}</Typography>
            </Stack>
            <Stack direction='row' spacing={4}>
              <Stack direction='column' spacing={0.25}>
                <Typography variant='h4'>{path.length.toFixed(2)}</Typography>
                <Typography variant='body2' 
                color={rsfTheme.palette.other.neutral5}>
                  Path Length
                </Typography>
              </Stack>
              <Stack direction='column' spacing={0.25}>
                <Typography variant='h4'>{path.difficulty}</Typography>
                <Typography variant='body2' 
                color={rsfTheme.palette.other.neutral5}>
                  Difficulty
                </Typography>
              </Stack>
              <Stack direction='column' spacing={0.25}>
                <Typography variant='h4'>? miles away</Typography>
                <Typography variant='body2' 
                color={rsfTheme.palette.other.neutral5}>
                  Start
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction='column' 
          alignItems='flex-end' 
          justifyContent='space-between'>
            <Button variant='plain' startIcon={<Export/>}
            disableElevation className='btn in-text-frame'>
                Share
            </Button>
            <Button variant='contained' startIcon={<ArrowRightIcon/>}
            disableElevation className='btn in-text-frame' sx={{width:'160px'}}>
              Explore Trail
          </Button>
          </Stack>
        </Stack>
        
        {geoJson ? (
          <LoadScript googleMapsApiKey={APIKey}>
            {currentMap}
          </LoadScript>
        ) : (
          <Skeleton variant="rectangular" height="600px"
          style={{borderRadius: '8px'}}/>
        )}
      </Stack>
    </ThemeProvider>
  )
}

export default TrailOverviewFrame;