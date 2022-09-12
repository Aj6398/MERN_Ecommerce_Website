//()
// When Reducer will be clled? when we do "dispatch" from "action"...
// and reducer take 2 argument....
// "100%"- we need to have a switch-case ...


// "state"- having details of "redux"-dataBase..(already having in redux..)
// "action"- have details which we want to store in the "redux".... 
import * as actionType from '../constants/cartConstatnts';
export const cartReducer = (state = { cartItems:[] }, action) =>{
    switch(action.type){
        case actionType.Add_TO_CART:  
            const item = action.payload; 
            const exist = state.cartItems.find( product => product.id === item.id); //"find" based on the "key"-"product"
            if (exist) {
                return{ ...state, cartItems: state.cartItems.map(data => data.product === exist.product ? item: data)}   
            } else {    
                return { ...state, cartItems: [ ...state.cartItems, item ]}
            }
        case actionType.REMOVE_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload) }
        default: 
            return state;

    }
}