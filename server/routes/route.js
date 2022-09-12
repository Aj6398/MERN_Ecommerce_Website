
// Error (404) is coming in consol's Netwok.... But data is loaded in  the "Payload" ... So we need to do some changing the "backend"
//  1) We need to add "routing"-path according to the "post"-api of the server(backend)...
//                 Also, obn that "routed"-path, we call one function("Call-back"-func) which will deal with the "User-inputed-Data" with backend


import express from 'express';
//express has function "Router" and it's asssigned to variable called "router"..
const router = express.Router();

//import user-controller-signup function
import { userSignup, userLogin } from '../controller/user-controller.js';
import {getProducts, getProductById} from '../controller/product-controller.js';
// [p]- controller func...
import { addPaymentGateway,paytmResponse } from '../controller/payment-controller.js';



// for implimenting "routing" @signup ==> we need to route acording to post api...
// After hiting to the "signup", it needed to have a "call-back"-function... 
router.post('/signup',userSignup);   //=> calling "userSignup"-func @"signup"-end_point  by "post"-api
router.post('/login',userLogin);     //=> calling "userLogin"-func @"login"-end_point  by "post"-api


//We want to fetch the Products-data from the back-end. And for that, we need to setUp the "route" ultimately needs to make "get"-api in route 
router.get('/products',getProducts);  //=> calling "getProducts"-func(which helps to take out the products from DataBase) @"products"-end_point  by "get"-api
router.get('/product/:id',getProductById);


//[p]--
router.post('/payment',addPaymentGateway);
router.post('/callback',paytmResponse);

export default router;