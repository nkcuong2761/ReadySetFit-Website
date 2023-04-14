import { Stack, Typography, ThemeProvider, Button, Breadcrumbs, Link} from '@mui/material';
import { rsfTheme } from "../components/theme";
import {ReactComponent as ArrowElbow} from "../assets/arrow-elbow-up-left.svg";
import {ReactComponent as ChevronRight} from "../assets/chevron-right.svg";
import { Link as RouterLink } from 'react-router-dom';

function BreadcrumbsNew({pastLinks, currentLink}) {
  return (
  <ThemeProvider theme={rsfTheme}>
    <Stack
    direction='row'
    alignItems='center'
    spacing={1}
    paddingX={1}
    paddingY={1}
    sx={{
      backgroundColor: rsfTheme.palette.primary.light,
      borderRadius: '8px'}}>
      <Button variant='plain' startIcon={<ArrowElbow/>}>
        <RouterLink to={pastLinks[pastLinks.length - 1].link} className="link-router">
          Back
        </RouterLink>
      </Button>
      <Breadcrumbs sx={{paddingRight: '8px'}} separator={<ChevronRight/>}>
        {pastLinks.map(item => {
          return (
          <Link key={item.link}
          variant='h6'
          component={RouterLink} to={item.link}>
            {item.title}
          </Link>
        )})}

        <Typography variant='h6'>{currentLink}</Typography>
      </Breadcrumbs>
    </Stack>
  </ThemeProvider>
  )
}

export default BreadcrumbsNew;