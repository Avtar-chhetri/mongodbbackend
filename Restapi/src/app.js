const express=require("express")
const app=express();
const port = process.env.PORT || 8000;
const hbs=require("hbs")
const path =require("path")

// const port =8000;
require("./db/conn") //import the db connecctions
const studentmodel = require("./models/student") //import from the models
app.use(express.json())

const staticpaths= path.join(__dirname,"./server/components")
console.log(staticpaths)
const partialspaths= path.join(__dirname,"./server/partials")
console.log( partialspaths)




app.set('view engine', "hbs");           //this is for templete engines
app.set("views", staticpaths)           //change the name of folder from views to components
hbs.registerPartials(partialspaths)

app.get("/",(req,res)=>{
    // res.send("heropo server")
    res.render("index.hbs")
})


app.post("/student",(req,res)=>{
    console.log(req.body)
        const user= new studentmodel(req.body);

        user.save().then(()=>
        // console.log("sucee fullyt valid")
        res.send( user)


        ).catch((err)=>{

            // console.log(err)
            res.send(err)
        })


    // res.send("this is students data thi posrt")
})


//READ /GET the  data from rest api with async await
app.get("/student", (req,res)=>{
     

    const finddata=async()=>{
    try{
        const studentdata= await studentmodel.find()
            res.send( studentdata)
            console.log( studentdata)
    }catch(err){
         res.send(err)
    }
}

finddata()
})

app.listen(port,(err)=>{
  console.log(`this server is running from ${port}`)
})