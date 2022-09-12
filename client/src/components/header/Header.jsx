
import React from 'react';


//Import Components 
import Search from './Search';
import CustomButtons from './CustomButtons';


//importing "Link" for redirecting the home-page by click on the "Flipcart-Icone"
import { Link } from 'react-router-dom';

import { AppBar,Toolbar, Box, Typography, styled } from '@mui/material';

const StyledAppbar = styled(AppBar)`
    background: #2874f0;
    minheight: 52px;
`

const StyledToolbar = styled(Toolbar)`
    minHeight: 52px;
    margine: 0;
    padding: 0;
`

const ComponentLink = styled(Link)`
    margin-left: 19.5%;
    line-height: 0em;
    text-decoration: none;
    color: inheit;
`
const SubHeading = styled(Typography)`
    font-size: 11px;
    line-height: 0em;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 2,
})

const FlipkartImage = styled('img')({
    width: 75,
    height: 19,
    marginBlockStart : 0,
    marginBlockEnd : 0,
    marginTop : 0,
    marginBottom : 0,
})

const StyledCustomButton = styled(Box)`
    margin: 0 20px;
`


const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return(
        <StyledAppbar>
            <StyledToolbar >

                <ComponentLink to = {'/'}>        {/*//Home have path "empty"*/}
                    < FlipkartImage src={logoURL} alt="logo" />
                    <SubHeading> 
                        Explore&nbsp;
                        <Box component="span" style={{color: 'yellow'}} >Plus</Box> 
                        <PlusImage src={subURL} alt="sub=logo" />
                    </SubHeading>
                </ComponentLink>

                <Search/>

                <StyledCustomButton>
                    <CustomButtons/>
                </StyledCustomButton>

            </StyledToolbar>
        </StyledAppbar>
    )
}

export default Header;