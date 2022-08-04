const express = require("express");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();
module.exports = router;
const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt");

// Connect to Database
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
  try {
    console.log(email)
    const customer = await dbOperations.getcustomer(email);
    if (customer.length === 0) return res.json({ error: "admin not found" });
    else {
      console.log(password)
      bcrypt.compare(password, customer[0].password).then((match) => {
        if (!match) return res.json({ error: "Wrong password" });
        else {
          jwt.sign(
            { id: customer[0].id, name:customer[0].name },
            config.get("jwtPrivateKey"),
            (err, token) => {
              if (err) return console.log(err.message);
              res.json({
                token,
                username: customer[0].name,
                id: customer[0].id,
              });
            }
          );
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;

