import React from 'react';
import Carousel from '../Carousel/Carousel';

import { Box } from '@mui/system';
import { Typography } from '@mui/material';

import style from './hero.module.scss';

const Hero = () => {

    return (
        <Box 
        component='main' 
        className={`${style.hero}`}>
            <div 
            className={`${style.hero__headline}`}>
                <Typography 
                variant='h2'
                className={`${style.hero__title}`}>
                Crypto Dash
                </Typography>
                <Typography 
                variant='subtitle'
                className={`${style.hero__subtitle}`} >
                Get All The Info For Your Favorite Crypto Currency
                </Typography>
                
                <div 
                className={`${style.carousel}`}>
                    <Carousel />
                </div>
            </div>
        </Box>
    )
};

export default Hero;