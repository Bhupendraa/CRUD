const express =require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
const port = 3000;
app.use(cors());
 const database = require("./congig/database")
 database()

 const userModel = require("./Model/User");
 app.get("/",(req,res)=>{
    userModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
 })

 app.get("/getUser/:id",(req,res)=>{
    const id= req.params.id;
    userModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
 })

 app.post("/createUser",(req,res)=>{
    userModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
 })



app.get("/",(req,res)=>{
    res.send("file has been sent on it");
})



app.listen(port,()=>{
  console.log("working on port number 3000");
}
)