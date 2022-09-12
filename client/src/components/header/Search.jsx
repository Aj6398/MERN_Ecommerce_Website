
import React from 'react';
import { useState, useEffect } from 'react';   // Also we need to call "api" by of the "useEffect"-func && need to "Dispatch"
import { useSelector, useDispatch } from 'react-redux';      // "useSelector" used to point the data availble in the "redux"..
import { getProducts } from '../../redux/actions/productActions';

import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    display : flex;
    background : #fff;
    width: 30%;
    border-radius : 2px;
    margin-left: 10px;
`
const InputSearchBase = styled(InputBase)`
    padding-left : 20px;
    width : 100%;
`

const StyledSearchIcon = styled(SearchIcon)`
    color : blue;
    padding : 5px;
    display : flex;
`

const ListWrapper = styled(List)`
    position: absolute;
    background: #FFFFFF;
    color: #000;
    margin-top: 36px; 
`

const Search = () => {

    const [text, setText ] = useState('');     //(iii) stored value in the sate of "text", and initialize by "empty"-string...
    const { products } = useSelector( state=> state.getProducts);    //(iV) By useof "useSelect" we point-out the "state" && after that by use of "state" called a "getProducts"-func

    const dispatch = useDispatch();      // (V)...
    
    useEffect(() => {
        dispatch(getProducts())
    },   [dispatch] )               // (Vi) => We will have all products... and then we can fetch through "redux"

    const getText = (text) => {         //(ii) user input "text" comes into "getText"-func  but that we need to store somewhere...
        setText(text);
    };

    return (
        <SearchContainer>
            <InputSearchBase 
                placeholder = 'Search for products, brands and more' 
                onChange = {(e) => getText(e.target.value)}       //(i) Whatsoever user write in the "Text-Field"- that "Value" will be taken out by "onChange" & then assign to "getText"-func
                value = {text}  //for resetting the searchBar after Search...
            />
            <StyledSearchIcon/>
            {
                text && 
                    <ListWrapper>
                        {         /// "filter" will return the whole "Array-of-object" and we apply "map"-method on that, we taken out the "longTitle"
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (       /// if "product"-detail-Title includes the "Text"-which_user_Input then by use of "map"-method we can take-out thatOne... 
                                <ListItem>
                                    <Link
                                        to = {`/product/${product.id}`}
                                        onClick = {() => setText('')}
                                        style={{ textDecoration: 'none', color: 'inherit'}}
                                    >
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
            }
        </SearchContainer>
    )
}


        {/* <InputSearchBase placeholder = 'Search for products, brands and more' > 
        </InputSearchBase>       ///Will not work/// */}


export default Search;