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

    return (
        trending.map((data, i) => {
            return (
                <div 
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
                    style={{ display: 'flex', justifyContent: 'center', width: '90px', padding: '10px' }}>
                        <h4>{data.symbol.toUpperCase()}</h4>
                        {data.price_change_percentage_24h > 0 ? 
                        <h4 
                        style={{ color: 'green' }}>
                        {data.price_change_percentage_24h.toFixed(2)}%
                        </h4> 
                        : <h4 
                        style={{ color: 'red' }}>
                        {data.price_change_percentage_24h.toFixed(2)}%
                        </h4>}
                    </div>
                    
                    <h3 
                    style={{ textAlign: 'center' }}>
                    ${numberWithCommas(data.current_price.toFixed(2))}
                    </h3>
                </div>
            )
        })
    )
}

export default Carousel;