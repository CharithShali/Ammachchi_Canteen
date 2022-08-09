const express = require("express");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();
module.exports = router;



module.exports = router;
router.get("/get", async (req, res) => {
  console.log("Today Menu");
  try {
    let data = await dbOperations.seller();
    res.send(data);
  } catch (e) {
    res.send(e.message);
  }
});



// @route   GET api/Home
// @desc    get Menu order
router.post("/add", async (req, res) => {
  let details = req.body;
  console.log(details.name)
  
  try {
    let data = await dbOperations.addSeller(details);
    if (data) return res.status(200).json({ msg: "seller added" });
    res.status(400).json({ error: "FATAL ERROR: complaint not added" });
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/login", async (req, res) => {
  const { name, password } = req.body;

  let seller= await dbOperations.getseller(name);
  //console.log('dddddddd',customer[0].password);
  if(!seller) return res.status(400).send('Invalid email')
  if(seller[0].password==password) return res.status(200).send(seller)
  
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

router.get("/getfoods/:seller_id", async (req, res) => {
  let id = req.params.seller_id;  
  try {
    let data = await dbOperations.getfooditems(id);
    if (data) return res.status(200).send(data);
    else res.status(400).json({ error: "FATAL ERROR: complaint not added" });
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/myorders/:seller_id", async (req, res) => {
  let id = req.params.seller_id;  
  try {
    let data = await dbOperations.sellerorders(id);
  }
  catch (e) {
    console.log(e.message);
  }
});

router.get("/confirmorder", async (req, res) => {
  let id = req.body;  
  try {
    let data = await dbOperations.confirmOrder(id);
    if (data) return res.status(200).send(data);
    else res.status(400).json({ error: "FATAL ERROR: order not added" });
  }
   catch (e) {
    console.log(e.message);
  }
});

module.exports = router;

