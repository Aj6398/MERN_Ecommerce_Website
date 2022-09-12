import React from 'react';

//Now we need to make the profile after sucessful signup...

import { Typography,Box, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from "react";

// To handle CSS of the Menu-topup 
const Menucss = styled(Menu)`
    Margin-top: 5px;
`

const TypoLogout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`

const Profile = ({account, setAccount}) => {
    
    //// Making stare-"State" & "setState"-func
    const [anchorEl, setAnchorEl] = useState(false);   //initialy given flase...
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);   //"event.currentTarget"- will a respective target string
    };    
    
    const open = Boolean(anchorEl);    // We convert "Target String" to Boolean Formate==> If target string is there=> True, Otherwise=>False... 
    
    const handleClose = () => {
      setAnchorEl(false);
    };

    // After "Logout" we empty the "account"-state... ==> so, as per the null value, It'll show the "Login"-Button....
    const logoutUser = () => {
        setAccount('');            // If We asssign empty-string to the "setAccount" then value of "firstneme" stored in the "account"-will be vanish  
    }

    return(
        <>
            <Box onClick={handleClick}> <Typography style = {{marginTop : 2, cursor: "pointer"}}> {account} </Typography> </Box>   {/* // After sucessful sign-in, We ant to show username in place of "Login"-Button.. */}
            <Menucss
                open={open}   //For opening the pop-up-menu
                anchorEl={anchorEl}  // for opening the pop-up-menu exactly below the button("Profile")... Otherwise it'll show at the end of home page..
                onClose={handleClose}
                >
                {/* // onClick we need to call 2 functions... */}
                <MenuItem onClick={() => {handleClose(); logoutUser();}}>   
                    <PowerSettingsNewIcon color="primary" fontSize="small"/>  {/*//color,fontsize,class,sx... will be found in "props" under "icon" */}
                    <TypoLogout>Logout</TypoLogout>                          
                </MenuItem>
            </Menucss> 
        </>
    )
}

export default Profile;