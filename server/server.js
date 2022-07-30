const express=require("express");
const config = require("./config/config")
const app=express();

const helmet = require("helmet");
app.use(helmet());


const cors = require("cors");
app.use(express.json());
app.use(cors());




const today_menu = require("./routes/home");
const addtodaymenu = require("./routes/addtodaymenu");
const addfooditem = require("./routes/addfooditem");
const seller = require("./routes/seller");
const complaint = require("./routes/complaint");
const customer = require("./routes/customer");
//const addseller= require("./routes/addseller");

//const foods = require("./routes/sellers");



// Routes
console.log("hiii");
app.use("/api/home", today_menu);
app.use("/api/seller", seller);
app.use("/api/addtodaymenu", addtodaymenu);
app.use("/api/addfooditem",addfooditem);
app.use("/api/complaint", complaint);
app.use("/api/customer", customer);
//app.use("/api/addseller", addseller);


app.listen(3001,()=>{
console.log("server running on port 3001");

});