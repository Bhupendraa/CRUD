const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect= ()=>{
    mongoose.connect(process.env.Database ,{
        
    })

    .then(()=>console.log("successfull connected"))
    
    .catch((error)=>{
        console.log("Error occured")
        console.log(error.message)
        process.exit(1);
    });
}


module.exports = dbConnect;