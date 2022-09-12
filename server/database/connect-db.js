

// /// made function name "Connection"
//  DataBase is external entity and their might be chances of coming exception, so inorder to handle that,
//  so we handle that "error" by "catch". And also we can print that "error" by "console".
//  And also we can print the error type by error's key "message" ==> "error.message"

// // ///try{
//         mongoose have function "connect" which use to creat link with Mongodb.....
//         "connect" is an "asynconic" function which return the promise......
//        \so we need to use ".then" after connect().then or 
//        \we can use "async" & "await"
//        if database connected sucessfully then we print out by "console"

//         connect has mutilple argumets  : 1) URL 2) Object with values....
//          obj1: useUnifiedTopology: true (Mongodb uses internal server directory and monitoring engine, but it got depricated... so we tell here that use "new" server directory and monitory engine...)
//          obj2: useNewUrlParser: true (We tell Mangodb to use newly Url parcel which ever available or updated....)
// // }

/// Including website Auhantication(User_Name & Password) into code is not a good practice... 
//            So For that, we need to install "dotenv" library by "npm i dotenv" and make "dotenv" file to store Authantication into that file...
//            And from that "dotenv" file we import User_Name & Password... We can't push ".env" file to any production or github....

//import mongoose library
import mongoose from "mongoose";


export const Connection = async (USERNAME,PASSSWORD) => {
    // const URL = `mongodb+srv://${USERNAME}:${PASSSWORD}@ecommerce-web.rbwh849.mongodb.net/?retryWrites=true&w=majority`; /// check username & password correctly...
    const URL = `mongodb+srv://${USERNAME}:${PASSSWORD}@web-app.fcdalsp.mongodb.net/?retryWrites=true&w=majority`; /// check username & password correctly...
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true , useNewUrlParser: true });
        console.log("Database Connected Succesfully");
    }catch(error){
        console.log('Error while connecting to database to mongoDb',error.massage);
    }
}

export default Connection;


///In order to link "Connection" function with "Mongodb" we need to install library:"npm i mongoose"