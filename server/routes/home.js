const express = require("express");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();
module.exports = router;



module.exports = router;
router.get("/", async (req, res) => {
  console.log("Today Menu");
  try {
    let data = await dbOperations.getMenuInfo();
    res.send(data);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = router;
