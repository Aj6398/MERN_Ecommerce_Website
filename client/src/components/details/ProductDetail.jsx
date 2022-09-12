
import React from "react";
import { Typography, Box, styled, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { LocalOffer as Badge } from '@mui/icons-material';


const SmallText = styled(Box)`
    verical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`;

const StyledBadge = styled(Badge)`
    margin-right: 10px;
    color: #00CC00;
    font-size:15px;
`;

//for writing in the ""-child component of columnText, 
const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;
    & > td {             
        font-size: 14px;
        margin-top: 10px;
        border: none;
    }
`;



const ProductDetail = ({ product })=> {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date( new Date().getTime() + ( 5 * 24 * 60 * 60 * 1000) );   //Date().getTime()=> will give time in miliseconds, And we set delivery day after 5-days-->(in mili second)
    
    return(
            <>
                <Typography>{product.title.longTitle}</Typography>
                <Typography style = {{marginTop: 5, color: '#878787', fontSize: 14}}>
                    8 rating & 1 Review
                    <Box component = "span"><img alt = 'Flipcart Assures' src = {fassured} style={{width:77, margin:20}}/></Box>
                </Typography>
                <Typography>
                    <Box component= "span" styled={{ fontsize:28}}> ₹{product.price.cost} </Box> &nbsp;&nbsp;&nbsp;
                    <Box component= "span" styled={{ color: '#878787'}}><strike>₹{product.price.mrp}</strike> </Box> &nbsp;&nbsp;&nbsp;
                    <Box component= "span" styled={{ color:'#388E3C'}}> {product.price.discount} </Box> &nbsp;&nbsp;&nbsp;
                </Typography>
                <Typography>Available Offers</Typography>
                <SmallText>
                    <Typography><StyledBadge/>Partner Offer Get Extra 10% off up to ₹100 on your next purchase of Home & Kitchen (during Big Billion Days) </Typography>
                    <Typography><StyledBadge/>Special Price Get extra 10% off (price inclusive of cashback/coupon)T&C </Typography>
                    <Typography><StyledBadge/>Partner Offer Purchase this product & win a surprise cashback coupon for The Big Billion Days Sale 2022</Typography>
                    <Typography><StyledBadge/>Partner Offer Sign up for Flipkart Pay Later and get Flipkart Gift Card worth upto ₹500*</Typography>
                    <Typography><StyledBadge/>Bank Offer 5% Cashback on Flipkart Axis Bank Card </Typography>
                    <Typography><StyledBadge/>No cost EMI on Bajaj Finserv on cart value above ₹5000 T&C </Typography>
                </SmallText>
                <Table>
                    <TableBody>
                        <ColumnText>
                            <TableCell style = {{color: '#878787'}}> Delivery </TableCell>
                            <TableCell style = {{ fontweight: 600}} > Delivery by {date.toDateString()} | ₹40</TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style = {{color: '#878787'}}> Warranty </TableCell>
                            <TableCell > No Warranty </TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style = {{color: '#878787'}}> Seller </TableCell>
                            <TableCell >
                                <Box component="span" style={{ color: '#2874f0'}}> AjSuperStore </Box>
                                <Typography> GST Invoice Available</Typography>
                                <Typography> View more Sellers Starting From ₹{product.price.cost}</Typography>
                            </TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell colon={2}>
                                <img src={adURL} style={{ width:390}} alt='flipkartpoints'/> 
                            </TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style= {{color:'#878787'}}> Description </TableCell>
                            <TableCell> {product.description} </TableCell>
                        </ColumnText>
                    </TableBody>
                </Table>
            </>
    )
}

export default ProductDetail;