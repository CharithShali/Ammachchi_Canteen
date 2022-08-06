const express = require("express");
const dbOperations = require("../controller/dbOperations")
const router = express.Router();
module.exports = router;
const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt");
const Joi=require('joi')
const schema = Joi.any()

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
  console.log("register server called");
  try {
    const schema = Joi.object({
     
      name: Joi.string().min(3).required(),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    });
    try {
      console.log("second try block");
      const value = await schema.validateAsync(req.body);
      let { password, email } = value;

      try {
        const user = await dbOperations.customer(email);
        if (user.length === 1) res.send("email already exists");
        else {
          const client = {
            ...value,
           // password: await bcrypt.hash(password, 10),
          };
          const reg = await dbOperations.addcustomer(client);
          const newUser = await dbOperations.customer(email);
          jwt.sign(
            { id: newUser[0].id, name: newUser[0].name },
            config.get("jwtPrivateKey"),
            (err, token) => {
              if (err) return console.log(err.message);
              res.json({
                token,
                name: user[0].name + " " + user[0].name,
                id: user[0].id,
              });
            }
          );
        }
      } catch (err) {
        res.send("Registering to database " + err.message);
      }
    } catch (err) {
      res.send("Schema validation " + err.message);
    }
  } catch (err) {
    res.send("Schema " + err.message);
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

