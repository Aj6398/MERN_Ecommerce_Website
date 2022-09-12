

//impport user...
import User from "../model_schema/user-schema.js";

// "userSignup"-func works as backend's api(we need to do error handling).... And it'll take two parameters...
// (i) request-variable(comes from front-end, like URl, type of request, Headers, Body..) 
// (ii) response-variable(goes from back-end to front-end)

export const userSignup = async (request, response) => {
    try{

        //2) Now, if from frontend, user signup with existing "user-name" then it'll throw error at backend 
        //                                     and it'll not allow user to continue with the same "user-name"
        // So, we try to throw message at frontend that user-already exist....
        // //if frontend's entered username "found" within database with any "One" then we'll return from here only... 
        const existuser = await User.findOne( {username: request.body.username } );
        if(existuser){
            return response.status(401).json({message: "User Already exist"});
        }

        //1) console.log(request.body);   //try to print body part of the came request from frontend
            // // Cross-Origin Resource Sharing (CORS) error showing on "Network"("console")... 
            // // For that, we need to install "npm i cors" and "use" it on "express-server"... 
            // // But still on each time clicking Continue on signuppopup==> on server Undefined is coming...
            // //          we try to printout the "body" which is coming from front-end on "server"... But "Undefined" showing....
            // //          Because in leatest version of "express" it's not able to handle "Body" of the "Post"-api
            // //          So, we need to install third party's package--> "npm i body-parser"--Helps to deal with dealing post-api

        // Now, we try to validate the user input data, And for that we store user input into object-variable...
        const user = request.body;
        const newUser = new User(user);  //for validating frontend-input-"user" by assigning into Schema-"User"
        await newUser.save();  // for saving 1 data on to the MongoDb by (Save()-func)

        //we need to "return" after saving data on DataBase....// That can also handle by "response"
        response.status(200).json( {message: user });    //By use of "message" key of the "json", we can show "user" details on server

    }catch(error){
        // console.log('error occured while userSignup',error);    // for printinmg on terminal..
        response.status(500).json( {message:  error.message} );  // for showing error message on "front-end"
    }
}
// export default userSignup;



export const userLogin = async (request, response) => {
    try{
        //by use of front-end's data( "username" & "password" ) we need to "hit" @ "backend"
        // first we define it save in variable
        const username = request.body.username;
        const password = request.body.password;

        let user = await User.findOne( {username: username, password: password } );
        if(user){
            return response.status(200).json({SucessLoginUserData : user});       // As person login sucessfully, we passon the whole data of a "user" into "SucessLoginUserData"-field
        } else {
            response.status(401).json(`Invalid Login`);
        }
        
    }catch(error){
        response.status(500).json('Error',  error.message );  // for showing error message on "front-end"
    }
}


// under "Network"-"Payload"--> Shows "username"&"password" ==> which are loaded from the front-end
// under "Network"- "Preview"-"SucessLoginUserData"--> Shows "user"-whole data
// under  "Console"-"data"-"SucessLoginUserData"--> Shows "user"-whole data 


