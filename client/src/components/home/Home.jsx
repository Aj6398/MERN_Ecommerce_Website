
import React from 'react';


import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./slide";
import MidSlide from './MidSlide';

import { Box, styled } from "@mui/material";
// import { Box } from "@mui/system";

// import { Fragment } from "react";

// we need to call "get"-api at the "Home.js" to call our api when we hit the site....
// React's Hook --> "useEffect" ==> which can work as Life cycle methods like Component-Did-Mount , Component-Did-Update , Component-will-mount ....     
import { useEffect } from "react";
// "useEffect"- Takes Two arguments...
// (i) Callback-func (ii) Conditions when we want to call the useEffect
///            (ii) []-Empty array--> Component-did-mount
///                 ["values"]- --if any chenge happens for the values, "useEffect" should be call... --> Component-Did-Update  
///                  here, on the "dispatch"- we wan to call the "useEffect"....


// We want to call the "getProducts"-func when the site hit..
import { getProducts } from "../../redux/actions/productActions";

//As we used dispatch in "getProducts"-func --> we need to pass that funct in "useDispatch"...
// we HAVE CUSTOM Hook named-"useSelector"==> where we have "state"--from react-extention-"state" 
//       We fetch all data from the MongoDb and sotred on the "Redux", Now we need to fetch data from the "Redux" also ... For that, "useSelector" will be useful...
import { useDispatch, useSelector } from 'react-redux';


const BetweenSections = styled(Box)`
    padding: 10px 10px;
    background: #F2;
`

const Home = () => {


    const {products} = useSelector(state => state.getProducts);     // need to define the "value" in front of the "state"(state=>'state.anyproducts') from which we are fetching data from the "redux"
    // const getProducts = useSelector(state => state.getProducts)
    // const {products} = getProducts;  //Obje Destructuring method ## important in interview...
    // console.log(products);   //printing products on the console...

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])


    return(

        // <NavBar/>
        // <Banner/>

        // <div>
        //     <NavBar/>
        //     <Banner/>
        // </div>



        // <Fragment>
        //     <NavBar/>
        //     <Banner/>
        // </Fragment>
        <>

            <NavBar/>
            <BetweenSections>
                <Banner/>
                <MidSlide products={products} title= "Deal of the Day" timer = {true}/>  
                <Slide products={products} title="Discounts for you" timer = {false}/>   
                <Slide products={products} title="Sugeestions" timer = {false}/>   
                <Slide products={products} title="Top Selection" timer = {false}/>   
                <Slide products={products} title="Recommended Items" timer = {false}/>   
                <Slide products={products} title="Season's top picks" timer = {false}/>   
                <Slide products={products} title="Top Deals on Accessories" timer = {false}/>   
            </BetweenSections>


        </>

    )
}

export default Home;


//We want to passon the "products" with "Title"&&"Timer" for further efficient use of "slide"-->"redux"...