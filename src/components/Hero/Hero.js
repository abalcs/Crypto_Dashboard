import React from 'react';
import { Box } from '@mui/system';

import style from './hero.module.scss';
import { Typography } from '@mui/material';

const Hero = () => {

    return (
        <Box component='main' className={`${style.hero}`}>
            <div className={`${style.hero__headline}`}>
                <Typography 
                variant='h2'
                className={`${style.hero__title}`}>
                Crypto Dash
                </Typography>
                <Typography 
                variant='subtitle'
                className={`${style.hero__subtitle}`} >
                Get All The Info For Your Favorite Crypto Currency.
                </Typography>
            </div>
        </Box>
    )
};

export default Hero;