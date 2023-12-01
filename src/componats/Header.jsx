import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, position: 'relative', zIndex: '9999999', display: { md: 'none', sm: 'none', lg: 'block', xs: 'none' } }}>
        <AppBar position="static" sx={{ backgroundColor: '#00000000' }} elevation={0}>
          <Toolbar>
            <IconButton
              size="larger"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
            </IconButton>
            <Typography variant='h6' component="div" sx={{ flexGrow: 1, color: 'white' }}>
              MovieBazar
            </Typography>
            <Typography variant='p' sx={{ pr: 3, color: 'white' }} >Home</Typography>
            <Typography variant='p' sx={{ pr: 3, color: 'white' }}>Schedule</Typography>
            <Typography variant='p' sx={{ pr: 3, color: 'white' }}>Movie</Typography>
            <Typography variant='p' sx={{ pr: 3, color: 'white' }}>News</Typography>
            <SearchIcon sx={{ pr: 3, color: 'white' }} />

            <Button variant='contained' color="warning" >Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
