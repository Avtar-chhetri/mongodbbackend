const mongoose =require("mongoose")

mongoose.connect("mongodb://localhost:27017/restdb").then(()=>{

console.log("connections sucess fully")
}).catch(()=>{

    console.log(err)
})


