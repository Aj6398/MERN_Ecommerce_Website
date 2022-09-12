
import React from 'react';


import  Carousel  from "react-multi-carousel";
import { bannerData } from "../../constants/data";
import {styled } from "@mui/material";
import 'react-multi-carousel/lib/styles.css';

const Image = styled('img') (({theme}) => ({
    width: '100%',
    height: 280,
    [ theme.breakpoints.down('md') ] : {     //'md'- mediumScreen..
        objectFit: 'cover',
        height: 180
    }
}));

// For "Carosal", "responsive"-prob is must... 
const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },

    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }

};

const Banner = () => {
    return(

        <Carousel 
            swipeable={false}
            draggable={false}
            responsive = {responsive}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
            showDots={false}
            keyBoardControl={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            slidesToSlide={1}
            >
                
                {
                    bannerData.map(data => (
                        <Image src ={data.url} alt='banner' />
                    ))
                }

        </Carousel>
    )
}


export default Banner;

//bannerData.map() ==> By putiing in loop, one by one access of data we'll get...