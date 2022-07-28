const express = require("express");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();
const multer=require('multer');
const storage=multer.diskStorage({
 destination: "../server/assests/",
 filename:(req,file,cb)=>{
  return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
}
}
)

const path=require('path');
const { addfooditem } = require("../controller/dbOperations");

const upload=multer({
storage:storage


})
module.exports = router;

// @route   GET api/Home
// @desc    get Menu order
router.post("/", async (req, res) => {
    let details = req.body;
    console.log(details.image)
    
    try {
      let data = await dbOperations.addfooditem(details);
      if (data) return res.status(200).json({ msg: "food added" });
      res.status(400).json({ error: "FATAL ERROR : food not added" });
    } catch (e) {
      console.log(e.message);
    }
  });
  module.exports = {
    addfooditem:addfooditem,

  };