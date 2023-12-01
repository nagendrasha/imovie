import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import UpcomingMovie from './UpcomingMovie';

const Home = () => {
  return (
    <>
    <Grid container className='banner' sx={{ display:'flex' , justifyContent:'center', alignItems:'center' ,  marginTop:{lg:'-70px'}}}>
        <Grid item lg={6} sm={12} md={6} xs={12} sx={{ textAlign:'center', p:{lg:'0px',md:'0px',sm:'50px',xs:'40px'} }}>
            <Button variant='contained' color='warning' >Book Now</Button>
            <br />
            <Box sx={{ mt:2 }}>
                <FacebookIcon className='social-icon'/>
                <InstagramIcon className='social-icon'/>
                <TwitterIcon className='social-icon'/>
            </Box>
        </Grid>
        <Grid item lg={6} sm={12} md={6} xs={12} sx={{ textAlign:'center' }}>
            <PlayCircleIcon sx={{ fontSize:'50px' , bgcolor:'white' , borderRadius:'50%' }}/>
            <br />
            <Typography variant='p' sx={{ color:'white' }}>Watch Trailer</Typography>
        </Grid>
    </Grid>

    {/* Opening This Week */}
    <UpcomingMovie/>
    {/* Opening This End */}

    </>
  )
}

export default Home
