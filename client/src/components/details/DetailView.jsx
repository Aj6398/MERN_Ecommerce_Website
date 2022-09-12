
import React from 'react';
import {Box, Grid, styled} from '@mui/material';

//To fetch the data from the "redux" we'll use "iseEffect" && also we need to "dispatch" the details..
// "useSelector" for taking out values/data from redux...
import { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

//Now we need pass-on "perticular-Id" into the "getProductsDetails"-func which we will get from the "URL"
// and when anything we need to find from the "URL"-we need use "useParams"
import { useParams} from 'react-router-dom';

//When do we need to open this "DeatilsView" ??
// When person clickon the "products"...Which is a diffrent page..
// So, we need to do "routing" and for that we need to install package-"npm i react-router-dom"

import {getProductDetails} from '../../redux/actions/productActions';

import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';

const Wrapper = styled(Box)`
    background: #F2F2F2;
    margin-top: 55px;
`
const GridContainer = styled(Grid) (({ theme }) => ({
    background: '#FFFFFF',
    display:'flex',
    [ theme.breakpoints.down('md') ]:{ margin: 0}
}));

const GridRight = styled(Grid)`
    margin-top: 50px;
`

const DetailsView = () => {

    const dispatch = useDispatch();
    const {id} = useParams();  //useParams is object..

    const { loading, product} = useSelector(state => state.getProductDetails);

    console.log(product);

    useEffect(() => {
        if( product && id !== product.id )
        dispatch(getProductDetails(id))
    }, [dispatch, id, product, loading])

    console.log(product);

    return (
        <Wrapper>
            {
                product && Object.keys(product).length &&     //when passed-on object's array of key is non zero 
                    <GridContainer container>
                        <Grid item lg={4} md={4} sm={8} xs={12}>
                            <ActionItem product = {product}/>
                        </Grid>
                        <GridRight item lg={8} md={8} sm={8} xs={12}>
                            
                            <ProductDetail product={product} />         {/*//Passed-On "product" as a Probe */}
                        </GridRight>
                    </GridContainer>
            }
        </Wrapper>
    )
}

export default DetailsView;