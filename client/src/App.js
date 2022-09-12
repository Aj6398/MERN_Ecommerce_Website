
import React from 'react';


// import { Box } from '@mui/material';
import { Box } from '@mui/system';

import DetailsView from './components/details/DetailView';

//import components
import Header from './components/header/Header';
import Home from './components/home/Home'; 
import Cart from './components/cart/Cart';

//import datprovider and wrap "Header&Home" by "DataProvider" so we can use "state"-of-"DataProvider" into "Header&Home"
import DataProvider from './context/DataProvider';

//For enabeling "routimng"-in our project... we need to install "BrowserRouter";
//where we want to have router...=>we need to wrapup with "Routes"
// For mentioning "URL"- we need "Route"==> with mentioned-"URL" which component we want to open that we need to give in element...
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
     
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style = {{marginTop : '70px'}}>
          <Routes>
            <Route path='/' element={<Home/>}/>               
            <Route path='/product/:id'  element={<DetailsView/>} />   {/*"//:id" is variable && Now, another Address works... http://localhost:3000/product/1 */}
            <Route path= '/cart' element={<Cart/>} />   {/*  Now, another Address works... http://localhost:3000/cart    // But we want to open onClick of the "Cart"-button  so, we'll go to "ActionItem.jsx" ...*/}
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}


// Wherever we want to use the "current-user's-stored-data" we need to wrap-up the components by the "DataProvider"-func which uses the "Context" to save the current user-state... 
//We passed on the "childer"-Header&Home in the "DataProvider"====> So, we need to give "children" as argument in "DataProvider"
export default App;
