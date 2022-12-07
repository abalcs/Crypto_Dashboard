import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';

import style from './carousel.module.scss';

const Carousel = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setTrending(data)
        })
        .catch((e) => {
            console.error(e);
        })
    }, []);

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    const responsive = {
        0: {
            items: 2
        },
        512: {
            items: 4
        },
        2048: {
            items: 8
        }
    };

    const items = 
        trending.map((data, i) => {
            return (
                <Box 
                className={`${style.trending}`}>
                    <a 
                    href='http://www.bitcoin.org' target='_blank' rel='noreferrer'>
                        <img 
                        src={data.image} 
                        key={i} 
                        alt={data.name} 
                        style={{ width: '75px', marginTop: '20px' }}/>
                    </a>
        
                    <div 
                    className={`${style.trending__change}`}>
                        <Typography 
                        className={`${style.trending__change__symbolColor}`}>
                        {data.symbol.toUpperCase()}
                        </Typography>
                        
                        {data.price_change_percentage_24h > 0 ? 
                        <Typography 
                        style={{ color: 'green' }}>
                        {data.price_change_percentage_24h.toFixed(2)}%
                        </Typography> 
                        : <Typography 
                        style={{ color: 'red' }}>
                        {data.price_change_percentage_24h.toFixed(2)}%
                        </Typography>}
                    </div>
                    
                    <h3 
                    className={`${style.trending__price}`}>
                    ${numberWithCommas(data.current_price.toFixed(2))}
                    </h3>
                </Box>
            )
        })
    ;

    return (
        <AliceCarousel
        mouseTracking 
        items={items} 
        responsive={responsive}
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        autoPlay
        />
    )
}

export default Carousel;