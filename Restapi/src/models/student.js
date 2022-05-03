const mongoose=require("mongoose")
const  validator = require('validator');



const StudentSchema = new mongoose.Schema({

name:{
    type:String,
    required:true,
    minHeight: 8,
    maxlength:20,

},

email:{
  unique:true,
  required:true,
  type:String,
  
    validate(value){
        if(!validator.isEmail(value)){
            throw new Error ("enter valid email")
        }
    }
},

password:{
    unique:true,
    required:true,
    type:String,
    
    // validate(value){ //using own custome validate using validators
    //     if(!validator.isStrongPassword(value)){
    //         throw new Error ("enter valid email")
    //     }
    // }

}



})



const  studentmodel =new mongoose.model("studentcollections", StudentSchema); //making the models

module.exports=studentmodel;  //exports models