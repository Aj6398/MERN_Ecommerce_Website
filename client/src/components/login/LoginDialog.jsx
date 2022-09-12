
import {Dialog, Box, TextField, Button, Typography, styled} from '@mui/material';

import React from 'react';


//1)In order to handle two states of the "LoginPopup" and "SignUpPopup" we need to have "State"
//2)For using "DatProvider's"----"state" we need to import "useContext"..   
import { useState,useContext } from 'react';

//2.1 also state's value come from the "DataContext" so we need to import that also...
import { DataContext } from '../../context/DataProvider';

// call api function...
import { authenticateSignup, authenticateLogin } from '../../service/api';

const LoginPopUp = styled(Box)`
    height: 70vh; // full screen height is of 100 Viewport Height(vh) ==> out of that, 70vh used....
    width: 90vh;
`

const Combine = styled(Box)`
    display: flex;
    height: 100%;
`

const LeftImageLoginPopUp = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
    height: 88.2%;
    width: 28%;
    padding: 40px 35px;
    &>p{
        color: #FFFFFF;;
    };
    &>h5{
        color: #FFFFFF;
        font-weight: 600
    };
`

const RightLoginPopUp = styled(Box)`
    display : flex;
    flex-direction: column; // for column wise components {display:flex}+{flex-direction:flex-direction}
    padding: 25px 35px;
    flex : 1;
    & > div, & > p, &>button{
        margin-top: 20px;
    }
`

const LoginButton = styled(Button)`
    text-transform : none; // CSS applied on input text by MUI will be nullify.. 
    background: #FB6418;
    color: #FFF;
    height: 48px;
    border radius: 2px;
`
const RequestOTPButtonStyled = styled(Button)`
    text-transform : none; // CSS applied on input text by MUI will be nullify.. 
    background: #FFF;
    color: #2874f0;
    height: 48px;
    border radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/20%)    // (rgb == 000 && 20% shade we want...)
`

const TextPolicy = styled(Typography)`
    font-size-size : 12px;
    color: #878787;
`
const TextCreatAcc = styled(Typography)`
    font-size-size : 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
`
const ErrorCss = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const AccountInitialValues = {
    loginstate: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signupstate: {
        view: 'signup',
        heading: "Looks like you're new here!",
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const loginInitialValues = {
    username: '',
    password: ''
}

//inorder to "close" the dialoge on running surver, we can use function-"onClose" in Dialog.
//MatirialUi's Dialog hastwo useful function==> "Open" && "onClose".....

const LoginDialog = ( {open, setOpen } ) => {

    const [ accountstate, setaccountstate ] = useState(AccountInitialValues.loginstate);   // To handle Signup & Login Window through Onclick...
    const [ signup, setsignup ] = useState(signupInitialValues);  //To store/handle User-Input values which comes from front-end's @Signup window 
    const [login, setlogin ] = useState(loginInitialValues);  //To store/handle User-Input values which comes from front-end's @Login window
    const [error, setError] = useState(false);      // To Store/handle the Invalid-User-Error "State"

    //Now we need to take-out value of "account"&"setAccount" from "DataContext" by use of "useContext"
    const { setAccount} = useContext(DataContext);
      

    const handleClose = () => {
        setOpen(false);    
        setaccountstate(AccountInitialValues.loginstate);    /// After closing, we need to change set "AccountInitialValues" to "loginstate"
        setError(false);
    }

    const ChangeStatetoSignup = () => {
        setaccountstate(AccountInitialValues.signupstate)
    }

    const ChangeStatetoLogin = () => {
        setaccountstate(AccountInitialValues.loginstate)
    }


///////////////////////////  Defining *onInputChange*-func  &&  *signupUser*-func for "Sign-Up" pop-up   ////////////////////////

    const onInputChange = (e) => {
        // // console.log(e);      //Takeout occured event(written entry) into console... But actually it goes into Console-->Target-->value...(in code)
        // console.log(e.target.value);    //So, inorder "to see direct into console window"... ==> "e.target.value"

        //\\  \\ By use of "setsignup"-funct, we try to fillout the state of the "signup"-Object....
        //\\   By "...signup" we "destructure" the "signup"-object...
        //\\  Then we take the containt from the "e.target.value" and take name form "e.target.name" and assign to the respective field in "signup"-Object..
        setsignup({...signup, [e.target.name] : e.target.value});    //==> here, we used variable-(e.target.name) as a "Key" so need to put in "[]"
        console.log(signup);  // To show all details to "Console"
    }

    const signupUser = async () => {          //\\By use of "api"-"authenticatesignup"-func, we show all details to "Console"/"Netwok"
        // await authenticateSignup(signup);     //  which shows that, @"local-host" and at "signup" position, we have loaded all data...
        let response = await authenticateSignup(signup);   // previous one also work.... & to catch out the data used "let response" 
        // then after need to work on backend....After completeing backend work, "Data" shold come in "response"....
        if(!response) return;   // If "respose" will not comes from the frontend("signUp"- unsucessful) then we will terminate by teturn...
        handleClose();  //And If "respose" comes from the frontend("signUp"- sucessful) then we will colse the "LoginDialoge"...
        setAccount(signup.firstname); // so, as signup sucessfull, we put "fistname" into "account" by useof "setAccount"-func 
    }

    //After sucessful "Signup" we need to show "uername" in place of "login"--That can be done by 2 ways...
    //    (i) By handling "useState"---
    //    (ii) By making api--> we will prefer that because state of user "signed-in or not" will be useful at many places...
    //                             src==>context==>DataProvider.jsx

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////  Defining *onValueChange*-func  &&  *loginUser*-func for "Login" pop-up   /////////////////////////////////////

    const onValueChange = (e) => {
        setlogin({...login, [e.target.name]:e.target.value });
    } 


    const loginUser = async () => {         
        let response = await authenticateLogin(login);    
        console.log(response);   // For showing the login details on the "Console" ==> Without this, Data comes in "Network"
        if (response.status === 200){
            handleClose();
            setAccount(response.data.SucessLoginUserData.firstname);     // We assign "login"-person's "username" value into "setAccount"=
        } else{
            setError(true);
        }
    }
            //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    return(
        <Dialog open={open} onClose={handleClose} PaperProps = {{sx:{maxWidth:'unset'}}} >   
                                                    {/* //to "unset" MUI's default maxwidth; */}
            <LoginPopUp >
                <Combine >

                    <LeftImageLoginPopUp >
                        <Typography variant='h5'> {accountstate.heading} </Typography>
                        <Typography style={{ marginTop:20 }}> {accountstate.subHeading} </Typography>
                    </LeftImageLoginPopUp>
                    
                    { 
                        accountstate.view === 'login' ?
                        <RightLoginPopUp>
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label="Enter Username"  />
                            
                            { error && <ErrorCss>Please enter valid username</ErrorCss> }        {/*//If "error" and "Typography" becomes true.. then it'll print */}
                            
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label="Enter Password" />
                            <TextPolicy>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</TextPolicy>
                            <LoginButton onClick = { () => loginUser() }>Login</LoginButton>
                            <Typography style = {{textAlign: 'center'}}>OR</Typography> 
                            <RequestOTPButtonStyled> Request OTP </RequestOTPButtonStyled>
                            <TextCreatAcc onClick={() => ChangeStatetoSignup()}>New to Flipkart? Create an account</TextCreatAcc>
                        </RightLoginPopUp>
                    :
                        <RightLoginPopUp>

                            {/* onChange useful to "take out the values" from the occured "event(e)" in respective Textfield */}
                            {/* // On any change "onChange" event created and that passedon inthe "onInputChange"-function */}

                        {/* //Here we are calling same function "onInputChange" but inorder to enter valid entry with respect to valid Textfield,
                             we can diffrentiate "onInpputChange"-function by use of "name" field */}
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label="Enter First Name" />   
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label="Enter Last Name" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label="Enter UserName"  />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label="Enter Phone"  /> 
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label="Enter Email/Mobile number" />
                            <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label="Enter Password" />   
                            <LoginButton onClick={() => signupUser()}>CONTINUE</LoginButton>                        
                            <RequestOTPButtonStyled onClick={() => ChangeStatetoLogin()}> Existing User? Log in </RequestOTPButtonStyled>

                        </RightLoginPopUp>
                    }

                </Combine>
            </LoginPopUp>

        </Dialog>
    )
}

export default LoginDialog;

