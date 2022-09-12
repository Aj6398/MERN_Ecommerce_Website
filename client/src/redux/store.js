
// "createStore"- for connecting to made "store" to "redux"-devtools
// "cancle" on "create" tells that, you can use "redux-tools" instead of "redux".... but we'll use redux only...
import {createStore, combineReducers, applyMiddleware} from 'redux';


// 
import { composeWithDevTools } from 'redux-devtools-extension';

import { getProductsReducer, getProductDetailsReducer } from './reducers/productResucer';

import { cartReducer } from './reducers/cartReducer';

import thunk from 'redux-thunk';


//  combinedReducer takes an object as arument.... and that has been assign to name-callled-"reducer"
// "getProducts"-Key_Name && "getProductsReducer"-actul Reducer.... 
const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer,
});

// initialize the "thunk" as an Array named-"middleware"... 
const middleware = [thunk];



// createStore take two Arguments.... (i) reducer-like an Action-items.. (ii) middleware...
//        (i)We need multiple reducers like... produceReducers, cartReducers .... And we can't directlyu passon multiple reducers... 
//                         We need to combine them by "combineReducers"-import from redux... 
//    (ii) We want to passon the middleware through "DevTools" and for that, we need to install library-"npm i redux-devtools-extension",
//         We passon "middleware" as the argument of "composewithDevTools"
//         Also we need to install-one-middeleware called "Thunk" by use of libray-"npm i middleware"
//         Also if we want to pass on the "middleware" in to the "Redux-DevTools" then we need to use one func-"applyMiddleware"
//         (...middleware)==> by doing (...) -> we paaon middleware by use of "rest"-operator....

const store = createStore(
    reducer,   //first argumet..
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;


//// As previosly, we wrapped-up the components by "DataProivider" in "App.js" to use the "context"-"User-state" of a "Login/Signup"-"user"...
/// Here, also we need to Wrap-up the components of the "App"-in "index.js" by the "store" in-order to use the "redux"-DataBase... 
//                 for wrapping that, we need to install one package  ==> "npm i react-redux"--that have "Provider"-attribute..
//                    By "Provider" - we need to Wrap-up "App" with "React.StrictMode"...
///                       As, we WrapUp with "Provider".. Access has been given to enter the "store"--> where we give the "store"-func 