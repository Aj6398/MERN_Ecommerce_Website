
import React from 'react';


import { Box, styled, Typography } from "@mui/material";
import { navData } from "../../constants/data";


//// Previous
// const NavBarCSS = styled(Box)`
//     display : flex;
//     justify-content : space-between;
//     margin: 50px 130px 0 130px;
// `
/////// For responsive....
const NavBarCSS = styled(Box) (({theme})=> ({
    display : 'flex',
    justifyContent : 'space-between',
    margin: '50px 130px 0 130px',
    overflow: 'hidden', // For hidding the scrollBar from home...But notWorked... see...
    // overflow: 'overlay', --> for showing all NavBar element through ScrollBar... 
    [theme.breakpoints.down('lg')] : {margin: 0}   /// 'lg'- As goes blow largeScreen like... 'sm','dm'... margine'll be zero..
}));

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`
const Text = styled(Typography)`
    font-size : 14px;
    font-weight : 600;
    // font-family : inherent;
`

const NavBar = () => {
    return(
        <Box style = {{background: '#fff'}}>
            <NavBarCSS>
                {
                    navData.map(data => (

                        <Container>
                            <img src={data.url} alt = "nav" style={{width: 64}} />
                            <Text>{data.text}</Text>
                        </Container>

                    ))
                }
            </NavBarCSS>            
        </Box>
    )
}

export default NavBar;