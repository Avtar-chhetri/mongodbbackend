const mongoose =require("mongoose")



mongoose.connect("mongodb://localhost:27017/bibek").then(()=>{

console.log("connections sucxess full")
}).catch((err)=>{

    console.log(err)
})