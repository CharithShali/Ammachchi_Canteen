const express = require("express");
const mysql = require("mysql");
var config = require("../config/config");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();
module.exports = router;
let con = mysql.createConnection(config.databaseOptions);
const bcrypt=require("bcryptjs");




module.exports = router;
router.get("/", async (req, res) => {
  console.log("Customers");
  try {
    let data = await dbOperations.customer();
    res.send(data);
  } catch (e) {
    res.send(e.message);
  }
});



// @route   GET api/Home
// @desc    get Menu order
router.post("/add", async (req, res) => {
  var name=req.body.name;
  var email=req.body.email;
  var password=req.body.password;
  console.log(password);
  var cpassword=req.body.cpassword
  if(cpassword==password)  { 

   
    console.log("catch here");
      var hashpassword=bcrypt.hashSync(password,10);
      var sql="insert into customer(name,email,password) values(?,?,?);";

      con.query(sql,[name,email,hashpassword],function(err,result,fields){
      if(err) throw err;
                });
 
}
else{
res.redirect("/");

}

});

//post requiest for user login
router.post("/login",function(req,res,next){
var email=req.body.email;
var password=req.body.password;
var sql ="select * from customer where email=?;";
con.query(sql,[email],function(err,result,fields){
  if(err) throw err;

  if(result.length && bcrypt.compareSync(password,result[0].password)){
    req.session.email=email;
    console.log("okay")
  }
});
});

//Routes for homepage 
router.get("/home",function(req,res,next){
res.render('home',{message:"welcome,"+req.session.email});

});



module.exports = router;

