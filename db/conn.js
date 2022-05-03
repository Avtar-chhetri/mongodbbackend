
// const async = require("hbs/lib/async")
// const mongoose=require("mongoose")
// const { boolean } = require("yup")

// // mongoose.connect("mongodb://localhost:27017/testtest")
// mongoose.connect("mongodb://localhost:27017/testtes").then(()=>{
// console.log("connections sucess")
// }).catch(()=>{

//     console.log("db connections errors")
// })



// //schema creatings the Schema define the Documents
// const playListSchema= new mongoose.Schema({
// name:{
//     type:String,
//     required:true,
// },
// type:Str ing,
// viedo:Number,
// author:String,
// active:Boolean,
// })


// //creating the colletions 
// const playlist= new mongoose.model(" playlist", playListSchema)




// // //creating owns documents insert/create Querry

// // const createdocuments=async()=>{


// //     try{
// //     const reactsplaylist= new  playlist({
// //         name:"reacts-js",
// //         type:"front-end",
// //         viedo:50,
// //         author:"bibek",
// //         active:true,
// //     })

// //     const jssplaylist= new playlist({
// //         name:"js",
// //         type:"front-end",
// //         viedo:40,
// //         author:"ashim",
// //         active:true,
// //     })

// //     const nodejsplaylist= new playlist({
// //         name:"nodejs",
// //         type:"server side",
// //         viedo:50,
// //         author:"bibek",
// //         active:true,
// //     })

// //     const expressplaylist= new playlist({
// //         name:"express js",
// //         type:"back-end",
// //         viedo:20,
// //         author:"asim",
// //         active:true,
// //     })
    

// //     const result =await playlist.insertMany([reactsplaylist,jssplaylist,nodejsplaylist,expressplaylist])
// //     console.log(result)
// // }catch(err){

// //         console.log(err)
// //         console.log("documents creating err")
// //     }
// // }
// // createdocuments();




// //get the documents readiing Querry


// // const getdocuments=async()=>{
// // try{
// //  const result=await playlist.find({type:"server side"},{_id:0,name:1}).limit(5);
// //     console.log(result)
// // }catch(err){
// //     console.log("getting errors")
// // }
// // }
// // getdocuments();




// // //uppdate qerry


// // const upadetdoc=async()=>{

// //     try{

// //      const result=await playlist.updateMany({name:"nodejs"},{$set:{type:"js/server-side"}}).skip(2)
// //      console.log(result)
// //     }catch(err){

// //         console.log("updating error")
// //     }
// // }

// // upadetdoc();





// // //delete query

// const deletedoc= async() => {
//   try{

//      const result =await playlist.deleteOne({name:"express js"})
//      console.log(result)
//   }catch(err){
//        console.log("delete querry error")

//   }
// }

// deletedoc();





//asim ---


//connections compass with 

const async = require("hbs/lib/async");
const mongoose=require("mongoose");


mongoose.connect("mongodb://localhost:27017/second").then(()=>{

//  mongoose.connect("mongodb+srv://bibekuser:bibek0977@cluster0.thuwh.mongodb.net/MernStack?retryWrites=true&w=majority").then(()=>{
console.log("connections sucess fulll")
}).catch((err)=>{

  console.log(err)
})



//define the structure  this is clalled Schema

const mylistSchema= new mongoose.Schema({

name:{
  type:String,
  required:true,
},
ctype:String,
video:{
  type:Number,
  validate(value){
   if(value < 100){
     throw new Error ("less than 100");
   }
  }

 },
active:Boolean,


})





//creatindg the collection name 
const mylist = new mongoose.model("user", mylistSchema)




//insert the documents
const docinsert=async()=>{

  try{
     const reactsplaylist= new mylist({
     name:"nodejs",
     ctype:"back-end",
     video:30,
     active:true,
     })


     const jsplaylist= new mylist({
      name:"js",
      ctype:"fullstack",
      video:20,
      active:true,

      })


      
     const explaylist= new mylist({
      name:"expressjs",
      ctype:"fullstack",
      video:50,
      active:true,

      })

    const result = await mylist.insertMany([reactsplaylist,jsplaylist,explaylist]).
    console.log(result)
  }catch(err){
  }
}
docinsert();



//read the data find()


const reddoc=async()=>{

try{

  // const result=await mylist.find({video:{$eq:30}});
    const result=await mylist.find({$or:[{ ctype:"fullstack"},{ name:"expressjs",}]})
    // .countDocuments()
    .sort({name:1});
  console.log(result)

}catch(err){
console.log(err)

}

}

// reddoc();


const dledoc=async()=>{

  try{
    

    const result = await mylist.deleteMany({})
    console.log(result)

  }catch(err){

    console.log(err)
  }
}

// dledoc()
