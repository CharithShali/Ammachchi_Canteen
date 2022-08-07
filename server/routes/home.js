const express = require("express");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();
module.exports = router;







module.exports = router;
router.get("/todaymenu", async (req, res) => {
  details = req.body;
  try {
    let data = await dbOperations.getMenuInfo();
    res.send(data);
  } catch (e) {
    res.send(e.message);
  }
});


module.exports = router;
