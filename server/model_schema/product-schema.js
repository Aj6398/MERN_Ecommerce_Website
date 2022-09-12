///// Data coming from "third-party" to backend/Database ... 
//      And We can't enter data blindly into DataBase... As Control on data is not in our hand...
//      We need to check that whatsoever field we want to show on the server whether they are available or not..
//      So, *******Always... We validate data before loading into the data base.....********
//      We first need to Validate that data... like (i) "Id"  type is string, (ii) "URL" type is string
//                                                  (iii) "title" type is Obj. (iv) "price" type is OBJ....
 
//\\\\\\ "Schema" = "Validation" + "Uniqueness"
// We can enter Validation with help of "Schema" function which is avalable in Mongoose....
//// Also We can Define "Uniquness" into the "Schema" which helps to reduce the replication of data  
////                 which goes each time to DataBase when server runs....
import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    url:String,
    detailUrl: String,
    title: Object,
    price: Object,
    quantity: Number,
    description: String,
    attraction: String,
    tagline: String,

});

///// In "Mongoose-DataBase" we need to make "model" or "collection"- For that there is "model" function avalable in "mongoose"
//    whose custom "name" we need to give in "model" function.. and on that we apply "Schema" (Validation)
//    After then we store that into a const variable...
const Product = mongoose.model('product',productSchema);    // Here, for more than one collection, name will be plural...

export default Product;
