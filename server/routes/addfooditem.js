const express = require("express");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();


// @route   GET api/Home
// @desc    get Menu order
router.post("/", async (req, res) => {
  let details = req.body;
  console.log(details.name)
  
  try {
    let data = await dbOperations.addfooditem(details);
    if (data) return res.status(200).json({ msg: "complaint added" });
    res.status(400).json({ error: "FATAL ERROR: complaint not added" });
  } catch (e) {
    console.log(e.message);
  }
});

  module.exports = router;