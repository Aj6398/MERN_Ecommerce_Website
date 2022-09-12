
// importing products ...
import { response } from "express";
import Product from "../model_schema/product-schema.js";

// "getProducts" help to "fetch" the products from backend...  
export const getProducts = async (request, response) => {
    try{
        const products = await Product.find({})  //we want to fetchout data from "Product" -- Product.find({}) ==> empty string-{} will gives all data...  
    
        response.status(200).json(products);     // for returning data to front-end
    } catch(error){
        response.status(500).json({ message: error.message });
    }
}

// whatsoever we concate after the main "URL" that can be taken out from "Params"
//... like... http://localhost:8000/product/product1
// here.... ==> "/product/product1"
export const getProductById = async(request, response) => {
    try{
        const id = request.params.id;
        const product = await Product.findOne({'id':id});
        response.status(200).json(product);
    } catch (error){
        response.status(500).json({ message: error.message });
    }
}