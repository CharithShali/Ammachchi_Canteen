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
router.post("/addseller", async (req, res) => {
  let details = req.body;
  console.log(details.name)
  
  try {
    let data = await dbOperations.addSeller(details);
    if (data) return res.status(200).json({ msg: "complaint added" });
    res.status(400).json({ error: "FATAL ERROR: complaint not added" });
  } catch (e) {
    console.log(e.message);
  }
});


module.exports = router;

