const express=require("express");
const app=express();
const router=express.Router()

app.listen(3001,()=> {
    console.log("server running on port 3001")
});

module.exports=router