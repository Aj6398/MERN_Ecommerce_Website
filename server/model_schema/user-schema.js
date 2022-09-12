// We can validate data by use of "Mongoose"....

import mongoose from "mongoose";


// userSchema is one Object....
const userSchema = new mongoose.Schema({
    
    firstname:{
        type: String,
        required: true,  // Entential .. needs to be fill...
        trim: true,  // If user put blank_space ahead or in the last...Then it'll be trimed
        min: 5,   // min chara...
        max: 20,  // max chara...
    },
    lastname:{
        type: String,
        required: true,
        trim: true,  // If user put blank_space ahead or in the last...Then it'll be trimed
        min: 5,   // min chara...
        max: 20,  // max chara...
    },
    email:{
        type: String,
        required: true,
        trim: true,  // If user put blank_space ahead or in the last...Then it'll be trimed
        unique: true, // username should be qnique...
        lowercase: true, // if username is not written in lower case then it'll convert it to lower case.... 
    },
    username:{
        type: String,
        required: true,
        trim: true,  // If user put blank_space ahead or in the last...Then it'll be trimed
        index: true, // MongoDb apply index automatically...
        unique: true, // username should be qnique...
        lowercase: true, // if username is not written in lower case then it'll convert it to lower case.... 
    },
    password:{
        type: String, 
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },

});

// Now we need to "make-Model" by use of "mongoose" & 
// We need to give two arguments: (i) name of the model (ii) schema name which we want to apply on the model...
// As number of entity will increase, name will be plural...
const User = mongoose.model('user',userSchema);

export default User;