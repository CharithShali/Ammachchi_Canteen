const express = require("express");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();
module.exports = router;

router.post("/login", async (req, res) => {
    const { name, password } = req.body;
  
    let admin= await dbOperations.admin(name);
    //console.log('dddddddd',customer[0].password);
    if(!admin) return res.status(400).send('Invalid username or password')
    if(admin[0].password==password) return res.status(200).send(admin)
    
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
  router.get("/complaint", async (req, res) => {
    console.log("Complaint");
    try {
      let data = await dbOperations.complaint();
      res.send(data);
    } catch (e) {
      res.send(e.message);
    }
  });

  module.exports = router;
