const express=require("express");
const app=express();
const session=require("express-session")
const config=require('config')

const helmet = require("helmet");
app.use(helmet());


const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use((session({
secret:"ABCDefg",
resave:false,
saveUninitialized:true
})))

// if(!config.get('jwtPrivateKey')){
// console.log('Fatal error : jwtprivate key is not defined.');
// process.exit(1);
// }

const today_menu = require("./routes/home");
const todaymenu = require("./routes/todaymenu");
const fooditem = require("./routes/fooditem");
const seller = require("./routes/seller");
const complaint = require("./routes/complaint");
const customer = require("./routes/customer");
const admin = require("./routes/admin");
const orders = require("./routes/orders");
//const addseller= require("./routes/addseller");

//const foods = require("./routes/sellers");



// Routes
console.log("hiii");
app.use("/api/home", today_menu);
app.use("/api/seller", seller);
app.use("/api/todaymenu", todaymenu);
app.use("/api/fooditem",fooditem);
app.use("/api/complaint", complaint);
app.use("/api/customer", customer);
app.use("/api/admin", admin);
app.use("/api/orders", orders);



//app.use("/api/addseller", addseller);


  
app.listen(3001,()=>{
console.log("server running on port 3001");

});