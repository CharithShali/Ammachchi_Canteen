const express = require("express");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();
module.exports = router;
const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt");

// Connect to Database
module.exports = router;

// router.get("/", async (req, res) => {
//   console.log("Customers");
//   try {
//     let data = await dbOperations.customer();
//     res.send(data);
//   } catch (e) {
//     res.send(e.message);
//   }
// });

router.post("/add", async (req, res) => {
  let details = req.body;
  try {
    let data = await dbOperations.addcustomer(details);
    if (data) return res.status(200).json({ msg: "customer added" });
    res.status(400).json({ error: "FATAL ERROR: customer not added" });
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let customer= await dbOperations.customer(email);
  //console.log('dddddddd',customer[0].password);
  if(!customer) return res.status(400).send('Invalid email')
  if(customer[0].password==password) return res.status(200).send('logged in')
  
  // bcrypt.compare(password, customer[0].password, function(err, result) {
  //   if (err) { throw (err); }
  //   console.log(result);
  // });


//   const validPassword=await bcrypt.compare(password,customer[0].password);
//   console.log(password)
// console.log(validPassword);
//   if(validPassword) return res.status(400).send('Invalid email or password.');
//   const token=jwt.sign({_id:customer._id},'jwtprivatekey');
//   res.send(token);
  
});

module.exports = router;

