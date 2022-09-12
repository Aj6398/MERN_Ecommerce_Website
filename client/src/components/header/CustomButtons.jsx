
import React from 'react';


import { Box, Button , styled, Typography } from "@mui/material";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {ShoppingCart} from '@mui/icons-material';
import Badge from '@mui/material/Badge';

// import "unseContext"....
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";


import LoginDialog from "../login/LoginDialog";
// "useState" is "react's Hoock" where we can store the values..
import { useState } from "react";

// import "Profile" here... to use it's data...
import Profile from "./Profile";

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Wrapper = styled(Box) (({theme})=> ({
    display : 'flex',
    margin: '0 3% 0 auto',
    '& >*': {
        marginRight: '40px !important',
        fontSize: 16,
        allignItems: 'center'
    },
    [theme.breakpoints.down('md')]:{dispaly: 'block'}
}));

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;
    text-teanform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`

const Container = styled(Link)(({theme})=>({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]:{display: 'block'}
}));

const CustomButtons = () => {


    // We have made state-"open" whose initial value is taken as "false" & it has function-"toggleto" which useful to tockel the state's value..
    // here, usestate is used to store intial value...
    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(DataContext); // To take out values from "DataContex" into account by useof "useContext"
    
    //using useSelector....
    const { cartItems } = useSelector(state => state.cart);
    // here, we written a function "openDialog", and whenever it has been called then state of "setOpen" will become "true"...
    
    const openDialog = () => {
        setOpen(true);
    }

    return(
        <Wrapper>

            {/* //Now if user "signup"-sucessfully, we neddd to show "account" in place of "Login"  */}
            
            {
                account ? <Profile account = {account} setAccount = {setAccount} /> :     //   "Profile"-takes argument as "account"
                    <LoginButton variant="contained" onClick={ () => openDialog() } > Login </LoginButton>
                // //onClick we want to open the dialoge.... So we call the "openDialog" function...
            }

            <Typography style={ { marginTop:3, width:135 } } > Become a Seller </Typography>
            <Typography style={{marginTop: 3}}>More</Typography>

            <Container to="/cart" >
                <Badge badgeContent={cartItems.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                    <Typography style={{marginLeft:10}}> Cart</Typography>
            </Container>

            {/* //after opening of a dialoge... we need to pass-on "state" & "function" as a *prop* to LoginDialog-func as it will useful for further actions....   */}
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButtons;