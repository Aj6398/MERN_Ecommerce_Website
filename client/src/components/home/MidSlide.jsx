
import React from 'react';


import { Box, styled } from "@mui/material"
import Slide from './slide'

const FirstSlide = styled(Box)`
    display: flex;
`

///////////////// previos LeftSideSlider
// const LeftFirstSlide = styled(Box)`
//     width: 83%;
// `
////////////////Apply "theme" at LeftSideSSlider...
const LeftFirstSlide = styled(Box) (({theme}) => ({
    width: '83%',
    [theme.breakpoints.down('md')] : {width: '100%'}   //"md"-Mediam_Screen
}));


///// For making Mui Responsive, We can use "Grid", "Containers", "Break-points"
//// For different purposes, different methods will be used...
// //"Break-point" comes with "theme"..., We need to give "theme"- as an "argument"....
///////////////////Previos Right-sided Add...
// const RightFirstSlide = styled(Box)`
//     background: #FFFFFF;
//     padding: 5px;
//     margine-top: 10px;
//     margine-left: 10px;
//     width: 17%;
//     text-align: center;
// `
/////////////////// We apply theme At right sider Add, 
//// We need to handle "CSS" through "object"==> covert into string....
const RightFirstSlide = styled(Box) ( ({ theme }) => ({
    background: '#FFFFFF',
    padding: 5,
    marginTop: 10,
    marginLeft: 10,
    width: '17%',
    textAlign: 'center',
    [theme.breakpoints.down('md')] : {dsplay:'none'}
}));



const MidSlide = ({ products, title, timer }) => {
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return(
        <FirstSlide>
            <LeftFirstSlide>
                <Slide
                    products={products}
                    title = {title}
                    timer = {timer}/>
            </LeftFirstSlide>
            <RightFirstSlide>
                <img src={adURL} alt = "ad" style = {{width: 217}}/>
            </RightFirstSlide>
        </FirstSlide>

    )
}

export default MidSlide;