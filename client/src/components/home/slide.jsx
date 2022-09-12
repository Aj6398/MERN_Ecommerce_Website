
import React from 'react';


// slides are onthing but the "Carousel"

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
//import countdown..
import Countdown from 'react-countdown';

//By "Link"- component we can change the routing onClick...
//We need to wrapup the whole "product"-with link..
//          and with the "Link" we need to give path by "to"
// Also "Link"-type will underline the "textDecoration "
import { Link } from 'react-router-dom';

import { Box, Typography,  Button, Divider,  styled } from "@mui/material";

const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
      },

    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },

    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }

};
const HeadingSlide = styled(Box)`
    margin-top: 10px;
    background: #ffffff;
`;
const Deal = styled(Box)`
    padding: 15px 20px;
    display: flex;
`;
const Timer = styled(Box)`
    display: flex;
    margin-left: 10px;
    align-items: center;
    color: #7f7f7f;
`;
const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    margin-right: 25px;
    line-height: 32px;
`;
const ViewAllButton = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 600;
`;
const Image = styled('img')({
    width: 'auto',
    height: 150
});

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px;
`;

//for timer... We need a react-countdown library
// npm i react-countdown

const Slide = ({products, title, timer}) => {
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    
    const renderer = ( {hours, minutes, seconds}) => {
        return <box variant = "span">{hours} : {minutes} : {seconds} Left </box>;
    }

    return(
        <HeadingSlide>
            <Deal>
                <DealText>{title}</DealText>
                
                {
                    timer && 
                        <Timer>
                            <img src = {timerURL} alt="timer" style = {{ width: 24 }}/>
                            <Countdown date = {Date.now() + 5.04e+7} renderer = {renderer} />
                        </Timer>
                }

                <ViewAllButton variant="contained" color="primary">View All </ViewAllButton>
            </Deal>
            <Divider/>
            <Carousel 
                responsive={responsive}
                swipeable={false}
                draggable={false}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                showDots={false}
                keyBoardControl={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                slidesToSlide={1}>
                    
                {
                    products.map(product => (
                        <Link to={`product/${product.id}`} style={{textDecoration: 'none'}}>
                            <Box textAlign ="center" styled={{padding: '25px 15px'}}>
                                <Image src = {product.url} alt="product"/>
                                <Text style ={{color: '#212121', fontweight: 600}}>{product.title.shortTitle}</Text>
                                <Text style = {{color: 'grin'}}>{product.attraction}</Text>
                                <Text style = {{color: '#212121', opacity: '0.6'}}>{product.tagline}</Text>
                            </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </HeadingSlide>
    )
}

export default Slide;