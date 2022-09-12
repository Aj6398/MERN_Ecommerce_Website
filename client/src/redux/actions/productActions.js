/// EVERywhere.... WHENEVer you found "Reducer" you'll find the "Swtich"-case...

//for calling api ... import axios
import axios from "axios";

//import all contants from productConstants file .... by use of "*" aliase-named-"actionType" 
import * as actionType from '../constants/productConstants';


const URL = 'http://localhost:8000';

//in rputer==>router.get('/products',getProducts);  => "get"-api...& "/products"-endpoint..
export const getProducts = () => async (dispatch) => {
    try{
    
        // let response = await axios.get(`${URL}/products`)   //get-api has only one argument and whatsoever it'll return we catch that in "response"
        const { data } = await axios.get(`${URL}/products`);   // As we want only data from the returned value...     
        
        // console.log(response);
        dispatch({ type:actionType.GET_PRODUCTS_SUCCESS , payload: data});  // in dispatch we are sending object... && values(Data) is in payload...
    
    } catch(error){    
    
        // console.log('erro while calling getProducts api',error.message);
        dispatch({ type: actionType.GET_PRODUCT_FAIL , payload: error.message });   // if error comes we sent to "payload"
    }
}

//As backend response will be payload..(Object)

//{
// let obj = {
//     congig: {},
//     data: [],
//     headers: {},
//     status: 200,
//     message: ''
// }
//// object destructuring concept... (ODC)
//   "{data} = obj" (ODC) ===> "odj.data" (meaning)


export const getProductDetails = (id) => async(dispatch) => {
    try{
        dispatch({ type: actionType.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`${URL}/product/${id}`); 
        dispatch({ type: actionType.GET_PRODUCT_DETAILS_SUCCESS , payload: data });
    } catch(error){
        dispatch({ type: actionType.GET_PRODUCT_DETAILS_FAIL , payload: error.message });  
    }
}

