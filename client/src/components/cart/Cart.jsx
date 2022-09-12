import React from "react";
import { Typography,Grid,Box,Button,styled } from "@mui/material";

//To take out the Set value in the redux.. it is also custom- hook..
import { useSelector } from "react-redux";

//components
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

//[p]----
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utilities/paytm";

const Container = styled(Grid) (({theme}) =>({
    padding: '30px 135px',
    [theme.breakpoints.down('md')]:{padding: '15px 0'}
}));


const HeaderMyCart = styled(Box)`
    padding: 15px 24px;
    background: #fff;
`;

const ButtonWrapper = styled(Box)`
    padding: 16px 22px;
    background: #fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1 px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    width: 250px;
    height: 51px;
    border-radius: 2px; 
`;

const LeftComponent = styled(Grid) (({theme})=> ({
    paddingRight: 15,
    [theme.breakpoints.down('md')]:{marginBottom: 15}
}));


const Cart = () => {
    const { cartItems } = useSelector( state => state.cart );   //return the object... from which we can takeOut "cartItems"-all_value_are_their_in_cart...
    //Now we make website mobile screen friendly by using Grid and aplly to sm , xs....
    
    const buyNow = async () => {
        let response = await payUsingPaytm({ amount: 500, email: 'joshiabhishek590@iith.ac.in'});
        // created "information"-Form...& pass to "post"-api
        let information = {
            action: 'https://securegw-stage.paytm.in/order/process',             //PassOn the payment gateway link...
            params: response
        }
        post(information);
    }

    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                            <HeaderMyCart>
                                <Typography> My Cart ({cartItems.length})</Typography>
                            </HeaderMyCart>
                            {
                                cartItems.map(item => (
                                    <CartItem item = { item }/>
                                ))
                            }
                            <ButtonWrapper>
                                <StyledButton  onClick={ ()=> buyNow()} >Place Order</StyledButton>
                            </ButtonWrapper>
                        </LeftComponent>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView cartItems={cartItems}/>
                        </Grid>
                    </Container>
                : <EmptyCart/>
            }
        </>
    ) 
}

export default Cart;