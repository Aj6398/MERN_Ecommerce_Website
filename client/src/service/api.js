

import axios from 'axios';
//in api there might be chance of the getting error which we need to handle...

//***return await axios.post(`${URL}/signup`,data)**
//           We can call "api" by use of "axios"
//           As We want to sent user's inputed all data, It's a "post"-"api", so write "axios.post"
//           by use of back-tick `` we are converting type to string and by "${}" we can concadinate "URL" into string...
// All called api are Aynchronous-calls, We need to write async and await.. And we need to "return" that data ... so applied it

// beckend server URL
const URL = 'http://localhost:8000';

export const authenticateSignup = async (data) => {
    try{
        return await axios.post(`${URL}/signup`,data);   
    } catch(error){
        console.log('error while calling api', error);
    }
}


export const authenticateLogin = async (data) => {
    try{
        return await axios.post(`${URL}/login`,data);   
    } catch(error){
        console.log('error while login api', error);   // Identified error shown on the console but it will not give-back anything in return..
        return error.response;      // For returning error from the "authenticateLogin"-func, We ultimately return "error's - response" to the frontend..             
    }
}


/// After "unsucessful" login we will "error" will be shown,.... 
//               And if after the relogin... That error shows second time. 
//        ==> Then after closing the "login-diloge" we need to reset the "setError" to it's intial-(false)



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////// For fetching the data from the backend => we normally write "api"-funct in "api.js"-file.....
//.........like 
// //export const authenticateSignup = async (data) => {
//     try{
//         return await axios.post(`${URL}/signup`,data);   
//     } catch(error){
//         console.log('error while calling api', error);
//     }
// }
// and at the perticular point-"axios.post(`${URL}/product`,data)" we'll fetch that data... It seems to be easy....
// BUT we'll use the "redux" instead of doing this..."Redux-"Frontend's DataBase"=>One linerer defination
//                --- We'll store the local "states" in the centralized DataBase whose name we gave as "redux"... 



////PayTm GateWay....(P)....Need to hit "api"-in Back-end...


export const payUsingPaytm = async(data) => {
    try{
        let response = await axios.post(`${URL}/payment`,data);
        return response.data;
    } catch(error){
        console.log('Error while calling Payment api',error);
    }
}


// [p]- made api have a end-point is @"/payment" ==> so, we need to "route"- in the back-end...

