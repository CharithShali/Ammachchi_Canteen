const express = require("express");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();
module.exports = router;

// @route   GET api/Home
// @desc    get Menu order
router.post("/", async (req, res) => {
    let details = req.body;
    console.log(details.name)
    
    try {
      let data = await dbOperations.addtodaymenu(details);
      if (data) return res.status(200).json({ msg: "Today menu  added" });
      res.status(400).json({ error: "FATAL ERROR : Today menu  not added" });
    } catch (e) {
      console.log(e.message);
    }
  });


module.exports = router;
