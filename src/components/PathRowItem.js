import { Container, Stack, Typography, ThemeProvider, ListItem, Divider, ListItemAvatar, ListItemText, List, Skeleton} from '@mui/material';
import { rsfTheme } from "../components/theme";
import imgError from "../assets/img-error.jpg";
import { useState } from 'react';

function PathRowItem(data) {
  const path = data.data;
  const [isLoading, setIsLoading] = useState(true)

  function handleImageLoad() {
    setIsLoading(false)
  }
  function handleImageError(e) {
    console.log('cant load image')
    e.target.onError = null;
    e.target.src=imgError;
  }

  return (
    <ThemeProvider theme={rsfTheme}>
      <ListItem
      alignItems='center'
      sx={{
        width:'100%',
        minHeight:'108px',
        padding: '12px', 
        gap: '12px',
        ':hover': {
          boxSizing: 'border-box',
          WebkitBoxSizing: 'border-box',
          MozBoxSizing: 'border-box',
          border: '2px solid #292929',
          borderRadius: '8px',
          cursor: 'pointer'
        }}}>
        <ListItemAvatar>
          {isLoading && ( 
            <Skeleton variant="rectangular" height="64px" width="64px"
            style={{borderRadius: '8px'}}/>
          )}
          <img src={path.imgUrl ? path.imgUrl : imgError}
            style={{display:'none'}}
            onLoad={() => handleImageLoad()}
            onError={(e) => handleImageError(e)}/>
          {!isLoading && (
            <img src={path.imgUrl ? path.imgUrl : imgError} alt=""
              style={{
                width:'64px',
                height:'64px',
                borderRadius:'8px',
                objectFit:'cover'
              }}
              onError={(e) => handleImageError(e)}/>
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
    </ThemeProvider>
  )
}

export default PathRowItem;