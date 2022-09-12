

import * as actionType from '../constants/productConstants';

// There are two argument we pass on through "reducer"- "state"-current value & "action"-updated value
//  func-"getProductsReducer" making..
// we dispatch two times... in "productActions.js" so we need to diffrentite by use of switch statement ...
// in default case, state passon empty array of the products....// if we nothing comes....
export const getProductsReducer = (state = { products: [] } , action ) => {
    switch(action.type){
        case actionType.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionType.GET_PRODUCT_FAIL:
            return { error: action.payload }
        default: 
            return state 
    }
}



// here, we have single product.. which is "object"==> "{}" 
export const getProductDetailsReducer = ( state = { product: {}}, action) => {
    switch(action.type){
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return { loading: true }                             // when we "request-the-product-details", then we can return "loading"
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return { loading: false, product: action.payload}    //Our data came so, we don;t need to load again==>"Loading=fasle" and after success we load it on "Payload"...
        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return  {loading: false, error: action.payload}      //    no loading of the data && load the error into the payload
        case actionType.GET_PRODUCT_DETAILS_RESET:
            return { prodct: {}}                                  // return empty the product==> initial state..
        default:
            return state         
    }
}