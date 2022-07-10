const express=require("express");
const router=express.Router();

const mysql = require("mysql");
var config = require("../config/config");


// Connect to Database
let db = mysql.createConnection(config.databaseOptions);
db.connect((error) => {
  if (error) console.log(error.message);
  else {
    console.log("Connected to the Database...");
  }
});


//Routers 

const{posts} =required("../modules");
router.get("/",(req,res)=>{

res.json("hello world");

});
router.post("/",(req,res)=>{
const post=req.body;

})
   
 
