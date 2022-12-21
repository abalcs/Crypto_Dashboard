import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const GlobalFilter = ({ filter, setFilter }) => {

    return (        
        <Box
        component="form"
        sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px',
        }}
        noValidate
        autoComplete="off"
        >
        <TextField 
        sx={{ width: '80%', background: 'lightgrey' }} 
        id="outlined"
        color='primary'
        label="Search for Cryptocurrency" 
        variant="filled" 
        value={filter || ''} 
        onChange={(e) => setFilter(e.target.value)}/>
        </Box>
    )
}