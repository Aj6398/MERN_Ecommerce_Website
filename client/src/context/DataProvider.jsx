
import React from 'react';

//We can made "context" by use of the react's hook named "creatContex" easily...
import { createContext, useState } from "react";



export const DataContext = createContext(null);


//As we provide_Data to Home/Header component, we need to give "childer" as an "argument"......
// Then we need to forward those childern after passing value....
const DataProvider = ({ children } ) => {

    const [account,setAccount] = useState('');  //initialize by "empty"-string

    return(
        
        // "CreatedContext" has "Provider"-attribute , thenafter we need to export the made-"state"- which can be done by passing in "value"  
        <DataContext.Provider value={{
            account,  
            setAccount 
        }}>
            {children} 
        </DataContext.Provider>
    )
     
}

export default DataProvider;
// export to App.js for using "DataProvider" user details...