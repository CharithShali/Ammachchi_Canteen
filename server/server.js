const express=require("express");
const config = require("./config/config")
const app=express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const path=require('path');
const multer=require('multer');
const storage=multer.diskStorage({
    destination: "../server/assests/",
    filename:(req,file,cb)=>{
     return cb(null,`NEW`)
   }
   }
   )


const upload=multer({
    storage:storage
    })



const today_menu = require("./routes/home");
const addseller = require("./routes/addSeller");
const addtodaymenu = require("./routes/addtodaymenu");
const seller = require("./routes/seller");
const addfooditem = require("./routes/addfooditem");
const addcomplaint = require("./routes/addcomplaint");
//const foods = require("./routes/sellers");



// Routes
console.log("hiii");
app.use("/api/home", today_menu);
app.use("/api/addseller", addseller);
app.use("/api/seller", seller);
app.use("/api/addtodaymenu", addtodaymenu);
app.use("/api/addfooditem",addfooditem.single('image'),addfooditem);
app.use("/api/addcomplaint", addcomplaint);



app.listen(3001,()=>{
console.log("server running on port 3001");

});