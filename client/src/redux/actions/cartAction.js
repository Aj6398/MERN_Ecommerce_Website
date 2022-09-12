
// there are two Action(function) needed - to remove and add product in the cart...
//  So, for the perticular "product"- we need the data... (want to hit on the dataBase ) (By use of "axios" we call the "api")
// Also we need to have some "Cart-Constant"....

import axios from 'axios';
import * as  actionType from '../constants/cartConstatnts';
const URL = 'http://localhost:8000';

export const addToCart = (id,quantity) => async(dispatch) => {
    try{
        const { data } = await axios.get(`${URL}/product/${id}`);     //Obje. distructuring // In the backend we try to hit the perticular route-"router.get('/product/:id',getProductById);"
        
        console.log(data);
        dispatch({ type:actionType.Add_TO_CART, payload: { ...data, quantity }});
    }catch(error){
        dispatch({ type:actionType.Add_TO_CART_ERROR, payload: error.message });
    }
};

//we remove on the basis of "id", We'll use "thunk"
//We are not call any "api"- here... "As we are not storing it's information to cart"....==> Also No need to write the "try"&"Catch" statement...
// We can simpaly "dispatch"- that...
export const removeFromCart = (id) => (dispatch) => {
    dispatch ({ type: actionType.REMOVE_FROM_CART, payload: id})
};

