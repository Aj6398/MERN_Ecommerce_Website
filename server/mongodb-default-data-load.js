// We import "default products" which useful while loading site....   
import { products } from "./constant_data/default-slide-raw-data.js";
// Import the "Validated" product...
import Product from "./model_schema/product-schema.js";


//If we are using external entity then there might be possiblity of getting error......
//       So, we need to add "try" and "catch"....
//    Awat will wait till the Server starts running then after that will load data into the DataBase

const DefaultData = async () => {
    try{
        // await Product.deleteMany({}); //After definging "Uniqueness"- No need to delete all entry..
        await Product.insertMany(products);

        console.log('Data imported Sucessfully into MongoDb Database...');
    }catch(error){
        console.log('Error While inserting Default Data',error.message);
    }
}

export default DefaultData;