import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Nav = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      position="fixed" 
      style={{ background: '#141414' }}>
        <Toolbar>
          <Typography 
          variant="h5" 
          component="div" 
          sx={{ flexGrow: 1 }} 
          style={{ color: '#ffc400', fontWeight: '800', paddingLeft: '5%' }}>
            Crypto Dash
          </Typography>
          <Button 
          variant='contained' 
          style={{ background: '#ffc400', color: '#000', marginRight: '5%' }}>
          Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;