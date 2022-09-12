import React from 'react';
import { Box,Button, styled } from '@mui/material';

import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

//for routing, import useNavigate==> which is custome-hook, so we need to initialisze that...
import { useNavigate } from 'react-router-dom';
//For calling "reducer"- need to use dispatch
import { useDispatch } from 'react-redux';
// call "addToCart"...
import { addToCart } from '../../redux/actions/cartAction';
// for initialize the cart adding quantity
import { useState } from 'react';

//[p]-api import...
import { payUsingPaytm } from '../../service/api';
//[p]-Made-func..
import {post} from '../../utilities/paytm';

const LeftContainer = styled(Box) (({theme}) => ({
    minwidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{ padding: '20px 40px'}
}));

const Image = styled('img')({
    padding: '15px',
    width: "95%",
});

const StyledButton = styled(Button) (({theme})=>({
    width: '48%',
    height: 50,
    borderRadius: 2,
    [theme.breakpoints.down('lg')]:{width: '46%'},
    [theme.breakpoints.down('sm')]:{width:'48%'},
}));

const ActionItem = ({ product }) =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = product;

    const [quantity, setQuantity] = useState(1);

    const addItemToCart = () => {     //whenevr "Add-To-Cart"-button clicked we call this func and that helps to "route"-us....
        //First call "api" & set values in the "Redux", then after ===> it'll navigate to cart.... 
        dispatch(addToCart(id, quantity));              // We need to call one func-"addToCart" which is in "cartAction.js" and ultimately that will "dispatch"- data to "cartReducer" and that will include the data into "Reducer".... 
        navigate('/cart');        // need to give path...
    }

    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'joshiabhishek590@iith.ac.in'});
        // created "information"-Form...& pass to "post"-api
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',             //PassOn the payment gateway link...
            params: response
        }
        post(information);
    }

    return(
        <LeftContainer>
            <Box style ={{padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%'}}>
                <Image src = {product.detailUrl} alt='product'/>
            </Box>
            <StyledButton variant = "contained" onClick={ ()=>addItemToCart() } style = {{ marginRight: 10, background: '#ff9f00'}} > <Cart/> Add to Cart </StyledButton>
            <StyledButton variant = "contained" onClick={ ()=> buyNow()} style = {{ background: '#fb541b'}}><Flash/>Buy Now </StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;


//[p]- on "Buy Now" button click... we need to call the "api"..
// So, we see that, OnClick of "buy now"-button we are able to go to paymentGateway....
//.... That type of function also we need to do on click of "PlaceOrder".....
//..... So,  weneed to "copy"--> "Onclick={()=> buynow()}" && "buynow()"-func to the "Cart.jsx"